import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { newsQueries } from '~entities/news'
import { formatDate } from '~shared/ui/date'
import { Sidebar } from '~features/sidebar'
import { BackButton } from '~shared/ui/back'
import { CalendarMonth, Place } from '@mui/icons-material'
import { RecomendationList } from '~widgets/recomendation-list'

export const NewsDetailPage = () => {
  const { slug } = useParams()
  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = newsQueries.useGetNewsDetail(slug)
  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews()

  if (newsLoading || isLoading) {
    return <div>Загрузка</div>
  }
  if (newsError || isError) {
    return <div>Ошибка при получении данных</div>
  }
  return (
    <Box className="relative w-full container pb-20 r-lg:mt-5 r-md:container">
      <BackButton></BackButton>
      <Box className="grid grid-cols-[1fr_464px] r-lg:grid-cols-[1fr]">
        <Box>
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
          <Box
            component={'img'}
            src={newsData.data.photo}
            alt={newsData.data.title}
            className="r-md:w-full"
          ></Box>
          <Box className="flex items-center gap-x-[16px] my-5 w-full  r-sm:grid r-sm:gap-4">
            <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
              <CalendarMonth className="w-[24px] h-[24px]"></CalendarMonth>
              {formatDate(newsData.data.createdAt)}
            </span>
            <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
              <Place></Place>
              Анкара 1/17
              {/* <CalendarMonth></CalendarMonth> */}
              {/* <img src={location} alt="" /> {event.location} */}
            </span>
          </Box>
          <div
            dangerouslySetInnerHTML={{ __html: newsData.data.content }}
          ></div>
        </Box>
        <Sidebar
          data={newsListData.data}
          title={'Новости'}
          pathKey={'news'}
        ></Sidebar>
      </Box>
      <Box className="r-lg:mt-10">
        <Typography variant="h4">Вам может понравиться</Typography>
        <RecomendationList data={newsListData.data}></RecomendationList>
      </Box>
    </Box>
  )
}
