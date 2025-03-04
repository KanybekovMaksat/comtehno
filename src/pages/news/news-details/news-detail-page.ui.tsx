import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { newsQueries } from "~entities/news";
import { formatDate } from "~shared/ui/date";
import { Sidebar } from "~features/sidebar";
import { BackButton } from "~shared/ui/back";
import { CalendarMonth, Place } from "@mui/icons-material";
import { RecomendationList } from "~widgets/recomendation-list";

export const NewsDetailPage = () => {
  const { slug } = useParams();
  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = newsQueries.useGetNewsDetail(slug);
  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews();

  if (newsLoading || isLoading) {
    return <div>Загрузка</div>;
  }
  if (newsError || isError) {
    return <div>Ошибка при получении данных</div>;
  }
  return (
    <div className="relative w-full container pb-20 r-lg:mt-5 r-md:container">
      <BackButton />
      <div className="flex justify-between r-lg:flex-col">
        <div className="max-w-[830px]">
          <Box className="flex items-center gap-[8px]">
            <Typography variant="subtitle2">
              {formatDate(newsData.data.createdAt)}
            </Typography>
            <Typography className="uppercase" variant="h6">
              {newsData.data.category.name}
            </Typography>
          </Box>
          <Typography className="r-md:text-[25px]" variant="h2">
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
        <Typography variant="h4">Вам может понравиться</Typography>
        <RecomendationList data={newsListData.data} slug={slug} />
      </Box>
    </div>
  );
};
