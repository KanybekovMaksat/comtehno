import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { newsQueries, newsTypes } from "~entities/news";
import { formatDate } from "~shared/lib";
import { pathKeys } from "~shared/lib/react-router";

export const NewsPage = () => {
  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews();

  if (isError)
    return <Typography className="text-center">Error 404!</Typography>;

  if (isLoading)
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
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-7 r-md:grid-cols-[1fr] r-lg:grid-cols-[1fr_1fr]">
        {newsListData.data.map((item: newsTypes.News) => (
          <div key={item.slug}>
            <Link to={pathKeys.news.bySlug(item.slug)}>
              <Box className="flex flex-col">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full mb-4 h-[264px] rounded-[8px]"
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
                >
                  {item.title}
                </Typography>
              </Box>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};
