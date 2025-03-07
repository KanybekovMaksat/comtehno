import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { newsQueries, newsTypes } from '~entities/news'
import { useNewsFilter } from '~features/news-filter/news-filter.ui'
import { pathKeys } from '~shared/lib/react-router'
import { formatDate } from '~shared/ui/date'
import { Search } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { EventCardSwiper } from '~entities/eventSwiperCard'
import { SwiperNavigationButtons } from '~shared/ui/SwiperNavigationButtons'
import { EventCard } from '~entities/eventCard'

export const NewsPage = () => {
  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews()
  const {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    filteredData,
    category,
  } = useNewsFilter()
  const swiperRef = useRef(null)
  const isSmallScreen = useMediaQuery('(max-width: 704px)')

  if (isLoading) {
    return <div>Загрузка</div>
  }

  if (isError) {
    return (
      <Typography className="text-center text-dove" variant="caption">
        Нет результатов
      </Typography>
    )
  }

  return (
    <>
      <div className="container">
        <Typography variant="h3" className="mb-5 r-md:text-[50px]">
          Новости
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            '@media (max-width:1450px)': { display: 'grid', gap: '10px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              columnGap: '8px',
              '@media (max-width: 600px)': {
                flexWrap: 'nowrap',
                overflowX: 'auto',
                justifyContent: 'flex-start',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                paddingBottom: '8px',
              },
            }}
          >
            {category.data.map((item) => (
              <Button
                key={item}
                onClick={() => setActiveFilter(item)}
                className={`border border-solid border-[#E4E4E7] px-4 transition-colors duration-300 normal-case rounded-[12px] text-[#18181B] font-normal text-base mt-[10px]
                ${
                  activeFilter === item
                    ? 'bg-[#18181B] text-white'
                    : 'hover:bg-[#18181B] hover:text-white'
                }`}
                sx={{ whiteSpace: 'nowrap', height: '36px', minWidth: 'unset' }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box>
            <TextField
              fullWidth
              placeholder="Поиск Новостей"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                background: '#F4F4F5',
                border: '1px solid #D4D4D8',
                borderRadius: '12px',
                '& .MuiOutlinedInput-root': {
                  padding: '8px 16px',
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
              }}
              InputProps={{
                sx: {
                  '& input': { padding: '0px 10px' },
                },
                startAdornment: (
                  <span style={{ marginRight: '8px' }}>
                    <Search />
                  </span>
                ),
              }}
            />
          </Box>
        </Box>
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
        {!isSmallScreen && (
          <Box sx={{ position: 'relative', marginBottom: '40px' }}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              slidesPerView={1.5}
              spaceBetween={20}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Navigation]}
              breakpoints={{
                0: { slidesPerView: 1 },
                1048: { slidesPerView: 1.5 },
              }}
            >
              {filteredData.map((event) => (
                <SwiperSlide key={event.id}>
                  <EventCardSwiper event={event} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperNavigationButtons
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </Box>
        )}

        {isSmallScreen && (
          <Box>
            <Box className="flex-wrap flex gap-x-[24px]  justify-center pt-[24px] pb-[80px] ">
              {filteredData.map((event) => (
                <Box key={event.id}>
                  <EventCard key={event.id} event={event} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </div>
    </>
  )
}
