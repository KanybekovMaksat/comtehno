import { Box, Tab, Tabs, Typography } from '@mui/material'
import { CalendarMonth, ArrowForwardIos } from '@mui/icons-material'
import bg from './assets/img/newsBg.png'
import { useState } from 'react'
import { TabPanel } from './ui/tab-panel.ui'
import { newsQueries, newsTypes } from '~entities/news'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export const NewsList = () => {
  const { data: newsData, isLoading, isError } = newsQueries.useGetNews()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }

  const getMonthNames = () => {
    const date = new Date()
    const locale = 'ru-RU'

    const currentMonth = date.toLocaleString(locale, { month: 'long' })

    date.setMonth(date.getMonth() + 1)
    const nextMonth = date.toLocaleString(locale, { month: 'long' })

    date.setMonth(date.getMonth() - 2)
    const prevMonth = date.toLocaleString(locale, { month: 'long' })

    return { prevMonth, currentMonth, nextMonth }
  }
  const filterNewsByMonth = (newsList, month) => {
    return newsList.filter((news) => {
      const newsDate = new Date(news.createdAt)
      return newsDate.toLocaleString('ru-RU', { month: 'long' }) === month
    })
  }

  const { prevMonth, currentMonth, nextMonth } = getMonthNames()

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }
  if (isError) {
    return <div>Ошибка</div>
  }
  if (isLoading) {
    return <div>Загрузка</div>
  }

  return (
    <section>
      <div className="container">
        <Typography variant="h2">Новости</Typography>
        <Box className="flex gap-2 mt-5">
          <Box
            sx={{ backgroundImage: `url(${bg})` }}
            className="w-[952px] h-[456px] bg-cover rounded-[16px] flex justify-between items-end p-[24px]"
          >
            <div className="bg-white w-[196px] h-[40px] flex items-center rounded-[12px] justify-center">
              <CalendarMonth />
              <span>30 октября 2024</span>
            </div>
            <div className="bg-white w-[196px] h-[40px] flex items-center rounded-[12px] justify-center">
              <span>Подробнее</span>
              <ArrowForwardIos className="w-[15px]" />
            </div>
          </Box>
          <Box>
            <Box>
              <Tabs value={value} onChange={handleChange}>
                <Tab label={prevMonth} {...a11yProps(0)} />
                <Tab label={currentMonth} {...a11yProps(1)} />
                <Tab label={nextMonth} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
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
                {filterNewsByMonth(newsData.data, prevMonth).map((news, i) => (
                  <SwiperSlide key={i} className="flex flex-col">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabPanel>

            <TabPanel value={value} index={1}>
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
                {filterNewsByMonth(newsData.data, currentMonth).map(
                  (news, i) => (
                    <SwiperSlide key={i} className="flex flex-col">
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
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </TabPanel>

            <TabPanel value={value} index={2}>
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
                {filterNewsByMonth(newsData.data, nextMonth).map((news, i) => (
                  <SwiperSlide key={i} className="flex flex-col">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabPanel>
          </Box>
        </Box>
      </div>
    </section>
  )
}
