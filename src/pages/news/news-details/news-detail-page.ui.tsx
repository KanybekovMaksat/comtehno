import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { newsQueries } from "~entities/news";
import { Sidebar } from "~features/sidebar";
import { BackButton } from "~shared/ui/back";
import { CalendarMonth, Place } from "@mui/icons-material";
import { RecomendationList } from "~widgets/recomendation-list";
import { formatDate } from "~shared/lib";

export const NewsDetailPage = () => {
  const { slug } = useParams();
  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = newsQueries.useGetNewsDetail(slug);
  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews();

  if (newsError && isError)
    return <Typography className="text-center">Error 404!</Typography>;

  if (newsLoading && isLoading)
    return (
      <div className="m-auto">
        <CircularProgress />
      </div>
    );

  if (!newsData || !newsListData)
    return (
      <div className="m-auto">
        <CircularProgress />
      </div>
    );

  return (
    <Container className="relative w-full pb-20 r-lg:mt-5 max-w-[1440px]">
      <BackButton />
      <div className="flex justify-between r-lg:flex-col">
        <div className="max-w-[830px]">
          <div className="flex mb-5 items-center gap-[8px]">
            <Typography
              className="bg-sun text-white px-2 rounded-md"
              variant="h6"
            >
              {formatDate(newsData.data.createdAt)}
            </Typography>
            <Typography
              className="bg-primary text-white px-2 rounded-md uppercase"
              variant="h6"
            >
              {newsData.data.category.name}
            </Typography>
          </div>
          <Typography className="r-md:text-[25px] mb-5 text-5xl" variant="h2">
            {newsData.data.title}
          </Typography>
          <img className="w-full" src={newsData.data.photo} alt="img" />
          <Box className="flex items-center gap-x-[16px] my-5 w-full  r-sm:grid r-sm:gap-4">
            <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
              <CalendarMonth className="w-[24px] h-[24px]"></CalendarMonth>
              {formatDate(newsData.data.createdAt)}
            </span>
            <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
              <Place />
              Анкара 1/17
            </span>
          </Box>
          <div
            dangerouslySetInnerHTML={{ __html: newsData.data.content }}
          ></div>
        </div>
        <Sidebar data={newsListData.data} title={"Новости"} pathKey={"news"} />
      </div>
      <Box className="mt-10">
        <Typography className="mb-5" variant="h4">
          Вам может понравиться
        </Typography>
        <RecomendationList data={newsListData.data} slug={slug} />
      </Box>
    </Container>
  );
};
