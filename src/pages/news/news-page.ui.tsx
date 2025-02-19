import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { newsQueries, newsTypes } from "~entities/news";
import { pathKeys } from "~shared/lib/react-router";
import { formatDate } from "~shared/ui/date";

export const NewsPage = () => {
  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews();

  if (isLoading) {
    return <div>Загрузка</div>;
  }
  if (isError) {
    return <div>Ошибка</div>;
  }

  return (
    <>
      <div className="container">
        <Typography variant="h3" className="mb-5 r-md:text-[50px]">
          Новости
        </Typography>
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[24px] r-md:grid-cols-[1fr] r-lg:grid-cols-[1fr_1fr]">
          {newsListData.data.map((item: newsTypes.News) => (
            <div key={item.slug}>
              <Link to={pathKeys.news.bySlug(item.slug)}>
                <Box className="flex flex-col">
                  <Box
                    component="img"
                    src={item.photo}
                    alt={item.title}
                    className="w-full h-[264px] rounded-[8px]"
                  />
                  <Box className="flex gap-5 items-center">
                    <Typography className="text-[20px]">
                      {formatDate(item.createdAt)}
                    </Typography>
                    <Typography>{item.category.name}</Typography>
                  </Box>
                  <Typography>{item.title}</Typography>
                </Box>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
