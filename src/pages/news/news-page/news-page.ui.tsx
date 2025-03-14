import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { newsQueries, newsTypes } from "~entities/news";
import { pathKeys } from "~shared/lib/react-router";
import { useNewsFilters } from "../modules/useNewsFilters";
import { formatDate, highlightText } from "~shared/lib";

interface newsFilter {
  name: string;
}

export const NewsPage: React.FC = () => {
  const {
    data: categoryData,
    isError: categoryError,
    isLoading: categoryLoading,
  } = newsQueries.useGetNewsCategory();

  const {
    setActiveFilter,
    activeFilter,
    setSearchQuery,
    searchQuery,
    filteredList,
    newsLoading,
    newsError,
  } = useNewsFilters();

  if (categoryError && newsError)
    return <Typography className="text-center">Error 404!</Typography>;

  if (categoryLoading && newsLoading)
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );

  return (
    <Container className="max-w-[1440px]">
      <Typography variant="h3" className="mb-5 font-light r-md:text-[50px]">
        Новости
      </Typography>
      <div className="flex r-md:flex-wrap justify-between mb-6">
        <div className="flex flex-wrap max-w-4xl r-md:flex-nowrap r-lg:overflow-x-auto r-md:h-14 gap-2 mb-2">
          {categoryData?.map((filter: newsFilter, index: number) => (
            <Button
              key={index}
              onClick={() => setActiveFilter(filter.name)}
              className={`gap-2 border border-solid border-[#E4E4E7] px-4 transition-colors duration-300 normal-case rounded-[12px] text-black font-normal text-base
              ${
                activeFilter === filter.name
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
              sx={{ whiteSpace: "nowrap", height: "36px", minWidth: "unset" }}
            >
              {filter.name}
            </Button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Поиск студента"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "342px",
            height: "40px",
            background: "#F4F4F5",
            border: "1px solid #D4D4D8",
            borderRadius: "12px",
            padding: "8px 16px",
            fontSize: "16px",
            outline: "none",
          }}
        />
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-7 r-md:grid-cols-[1fr] r-lg:grid-cols-[1fr_1fr]">
        {filteredList?.map((item: newsTypes.News) => (
          <div key={item.slug}>
            <Link to={pathKeys.news.bySlug(item.slug)}>
              <Box className="flex flex-col">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-[464px] mb-4 h-[264px] rounded-[8px]"
                />
                <div className="flex mb-2 gap-2 items-center">
                  <Typography className="bg-primary text-white px-2 rounded-md text-[20px]">
                    {formatDate(item.createdAt)}
                  </Typography>
                  <Typography className="bg-sun text-white px-2 rounded-md">
                    {item.category.name}
                  </Typography>
                </div>
                <Typography
                  variant="subtitle1"
                  className="bg-primary text-white px-2 rounded-md"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(item.title, searchQuery),
                  }}
                >
                  {/* {item.title} */}
                </Typography>
              </Box>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};
