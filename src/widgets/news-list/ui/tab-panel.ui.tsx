import { Box, Typography } from '@mui/material'
import { newsTypes } from '~entities/news'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router'
import 'swiper/css'
import 'swiper/css/pagination'
import { formatDate } from '~shared/ui/date'
import { pathKeys } from '~shared/lib/react-router'

interface TabPanelProps {
  index: number
  value: number
  data: newsTypes.News[]
  month: string
}
const filterNewsByMonth = (newsList: newsTypes.News[], month: string) => {
  return newsList.filter((news) => {
    const newsDate = new Date(news.createdAt)
    return newsDate.toLocaleString('ru-RU', { month: 'long' }) === month
  })
}

export function TabPanel(props: TabPanelProps) {
  const { value, index, data, month } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Swiper
            direction="vertical"
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`
              },
            }}
            modules={[Pagination]}
            slidesPerView={4}
            className="h-[400px] relative pl-4 cursor-pointer"
          >
            {filterNewsByMonth(data, month).map(
              (news: newsTypes.News, i: number) => (
                <SwiperSlide className="flex flex-col" key={news.slug}>
                  <Link to={pathKeys.news.bySlug(news.slug)}>
                    <Typography variant="h6">
                      {news.title.length > 25
                        ? news.title.slice(0, 25) + '…'
                        : news.title}
                    </Typography>
                    <Box className="flex items-center">
                      <Typography className="border-r-2 border-gray-300 pr-2">
                        {formatDate(news.createdAt)}
                      </Typography>
                      <Typography className="pl-2">
                        {news.category.name}
                      </Typography>
                    </Box>
                  </Link>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Box>
      )}
    </div>
  )
}
