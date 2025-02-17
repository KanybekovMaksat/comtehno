import { Box, Tab, Tabs, Typography } from '@mui/material'
import { CalendarMonth, ArrowForwardIos } from '@mui/icons-material'
import bg from './assets/img/newsBg.png'
import { useState } from 'react'
import { TabPanel } from './ui/tab-panel.ui'
import { newsQueries } from '~entities/news'

import 'swiper/css'
import 'swiper/css/pagination'

export const NewsList = () => {
  const { data: newsData, isLoading, isError } = newsQueries.useGetNews()
  const [value, setValue] = useState(1)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const getMonthNames = () => {
    const date = new Date()
    const locale = 'ru-RU'

    const currentMonth = date.toLocaleString(locale, { month: 'long' })

    const nextMonth = new Date(date)
    nextMonth.setMonth(date.getMonth() + 1)

    const prevMonth = new Date(date)
    prevMonth.setMonth(date.getMonth() - 1)

    return {
      prevMonth: prevMonth.toLocaleString(locale, { month: 'long' }),
      currentMonth,
      nextMonth: nextMonth.toLocaleString(locale, { month: 'long' }),
    }
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
      <div className="container mb-36">
        <Typography variant="h2">Новости</Typography>
        <Box className="flex gap-2 mt-5 r-lg:flex-col">
          <Box
            sx={{ backgroundImage: `url(${bg})` }}
            className="w-[952px] h-[456px] bg-cover rounded-[16px] flex justify-between items-end p-[24px] r-lg:w-full r-md:flex-col r-lg:bg-center"
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
          <Box className="r-lg:flex r-lg:flex-col r-lg:gap-3 items-center">
            <Box>
              <Tabs value={value} onChange={handleChange}>
                <Tab label={prevMonth} {...a11yProps(0)} />
                <Tab label={currentMonth} {...a11yProps(1)} />
                <Tab label={nextMonth} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel
              value={value}
              index={0}
              data={newsData.data}
              month={prevMonth}
            />

            <TabPanel
              value={value}
              index={1}
              data={newsData.data}
              month={currentMonth}
            />

            <TabPanel
              value={value}
              index={2}
              data={newsData.data}
              month={nextMonth}
            />
          </Box>
        </Box>
      </div>
    </section>
  )
}
