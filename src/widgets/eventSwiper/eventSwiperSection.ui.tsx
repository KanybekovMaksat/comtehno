import React, { useRef } from 'react'
import { Box, Typography, Container, Button, TextField } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useEventFilter } from '~features/eventFilter/eventFilter.ui'
import { SwiperNavigationButtons } from '~shared/ui/SwiperNavigationButtons'
import { useMediaQuery } from '@mui/material'
import { EventCard, EventCardSwiper } from '~entities/event'
import { eventQueries } from '~entities/event/'
import SearchIcon from '@mui/icons-material/Search'
import 'swiper/css'
import 'swiper/css/navigation'

export const EventsSection: React.FC = () => {
  const {
    data: eventCategories,
    isError: categoriesError,
    isLoading: categoriesLoading,
  } = eventQueries.useGetEventsCategories()
  const {
    data: eventData,
    isError: eventError,
    isLoading: eventLoading,
  } = eventQueries.useGetEvents()

  const safeEventData = eventData?.data || [] // Защита от undefined

  const {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    filteredEvents,
  } = useEventFilter(safeEventData)
  const isSmallScreen = useMediaQuery('(max-width: 704px)')
  const swiperRef = useRef(null)

  if (eventLoading && categoriesLoading) {
    return <div>Загрузка</div>
  }
  if (eventError && categoriesError) {
    return <div>Ошибка</div>
  }
  return (
    <Box>
      <Container className="max-w-[1440px]">
        <Typography
          variant="h6"
          className="font-light text-[44px] pb-[14px] r-sm:text-[32px]"
        >
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
            className="w-9/12"
          >
            {eventCategories.data.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.name)}
                className={`border border-solid border-[#E4E4E7] px-4 transition-colors duration-300 normal-case rounded-[12px] text-[#18181B] font-normal text-base mt-[10px]
                ${
                  activeFilter == category.name
                    ? 'bg-[#18181B] text-white'
                    : 'hover:bg-[#18181B] hover:text-white'
                }`}
                sx={{ whiteSpace: 'nowrap', height: '36px', minWidth: 'unset' }}
              >
                {category.name}
              </Button>
            ))}
          </Box>

          <Box className="w-3/12">
            <TextField
              fullWidth
              placeholder="Поиск мероприятия"
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
                    <SearchIcon />
                  </span>
                ),
              }}
            />
          </Box>
        </Box>

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
              {filteredEvents.map((event) => (
                <SwiperSlide key={event.slug}>
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
              {filteredEvents.map((event) => (
                <Box key={event.slug}>
                  <EventCard key={event.slug} event={event} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  )
}
