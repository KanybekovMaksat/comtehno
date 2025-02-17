import { Box, Typography, Button, IconButton } from '@mui/material'
import { newsTypes } from '~entities/news'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router'
import 'swiper/css'
import 'swiper/css/pagination'
import { formatDate } from '~shared/ui/date'
import { pathKeys } from '~shared/lib/react-router'
import { useRef } from 'react'
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'

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
  const swiperRef = useRef<any>(null)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            direction="vertical"
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`
              },
            }}
            modules={[Pagination]}
            slidesPerView={4}
            className="h-[350px] relative pl-4 cursor-pointer r-sm:h-[550px]"
          >
            {filterNewsByMonth(data, month).map((news, i: number) => {
              if (i > 0) {
                return (
                  <SwiperSlide className="flex flex-col" key={news.slug}>
                    <Link to={pathKeys.news.bySlug(news.slug)}>
                      <Typography variant="h6" className="r-lg:text-center">
                        {news.title.length > 25
                          ? news.title.slice(0, 25) + '…'
                          : news.title}
                      </Typography>
                      <Box className="flex items-center">
                        <Typography className="border-r-2 border-gray-300 pr-2 r-lg:text-right">
                          {formatDate(news.createdAt)}
                        </Typography>
                        <Typography className="pl-2 r-lg:text-left">
                          {news.category.name}
                        </Typography>
                      </Box>
                    </Link>
                  </SwiperSlide>
                )
              }
            })}
          </Swiper>

          {/* Контейнер для кнопок */}
          <Box className="flex items-center mt-4 gap-5 r-lg:flex-col-reverse">
            <Link to={`${pathKeys.news.root()}`}>
              <Button
                variant="outlined"
                className=" border-black border-opacity-50 text-black lowercase"
              >
                Все новости
              </Button>
            </Link>
            <Box className="flex items-center">
              <IconButton
                className="text-black"
                onClick={() => swiperRef.current?.slidePrev()}
                sx={{ mt: 1 }}
              >
                <KeyboardArrowUp></KeyboardArrowUp>
              </IconButton>
              <IconButton
                className="text-black border"
                onClick={() => swiperRef.current?.slideNext()}
                sx={{ mt: 1 }}
              >
                <KeyboardArrowDown></KeyboardArrowDown>
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  )
}
