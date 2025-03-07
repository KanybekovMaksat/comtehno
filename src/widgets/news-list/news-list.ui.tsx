import { Box, Button, IconButton, Tab, Tabs, Typography } from '@mui/material'
import {
  CalendarMonth,
  ArrowForwardIos,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@mui/icons-material'
import { useState } from 'react'
import { TabPanel } from './ui/tab-panel.ui'
import { newsQueries } from '~entities/news'

import 'swiper/css'
import 'swiper/css/pagination'
import { formatDate } from '~shared/ui/date'
import { Link } from 'react-router-dom'
import { pathKeys } from '~shared/lib/react-router'

export const NewsList = () => {
  const { data: newsData, isLoading, isError } = newsQueries.useGetNews()
  const [value, setValue] = useState(1)
  const [currentNew, setCurrentNew] = useState(0)

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
        <Typography variant="h2" className="text-[50px]">
          Новости
        </Typography>
        <Box className="flex gap-12 mt-5 r-lg:flex-col">
          <Box
            sx={{ backgroundImage: `url(${newsData.data[currentNew].photo})` }}
            className="w-[952px] h-[456px] bg-cover rounded-[16px] flex justify-between items-end p-[24px] r-lg:w-full r-sm:h-[190px] r-lg:h-[50vh]"
          >
            <div className="bg-white w-[196px] h-[40px] flex items-center rounded-[12px] justify-center r-lg:hidden">
              <CalendarMonth />
              <span> {formatDate(newsData.data[currentNew].createdAt)}</span>
            </div>
            <div className="bg-white w-[196px] h-[40px] flex items-center rounded-[12px] justify-center r-lg:hidden ">
              <Link to={`/news/${newsData.data[currentNew].slug}`}>
                <span>Подробнее</span>
                <ArrowForwardIos className="w-[15px]" />
              </Link>
            </div>
          </Box>
          <Box className="hidden r-lg:block">
            <Typography variant="h5" className="text-[20px]">
              {newsData.data[currentNew].title}{' '}
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-[16px] font-normal text-primary"
            >
              {newsData.data[currentNew].category.name}{' '}
            </Typography>
            <Typography
              variant="body2"
              className="text-[14px] font-normal text-[#52525B]"
            >
              {formatDate(newsData.data[currentNew].createdAt)}{' '}
            </Typography>
          </Box>
          <div>
            <Box className="r-lg:flex-col r-lg:gap-3 items-center r-lg:hidden">
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
            {/* pagination */}
            <Box className="r-lg:flex items-center gap-5 hidden">
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
                  onClick={() => {
                    if (currentNew <= 1) {
                      return
                    }
                    setCurrentNew((prev) => prev - 1)
                  }}
                >
                  <KeyboardArrowUp></KeyboardArrowUp>
                </IconButton>
                <IconButton
                  className="text-black border"
                  onClick={() => {
                    if (currentNew == newsData.data.length - 1) {
                      return
                    } else {
                      setCurrentNew((prev) => prev + 1)
                    }
                  }}
                >
                  <KeyboardArrowDown></KeyboardArrowDown>
                </IconButton>
              </Box>
            </Box>
          </div>
        </Box>
      </div>
    </section>
  )
}
