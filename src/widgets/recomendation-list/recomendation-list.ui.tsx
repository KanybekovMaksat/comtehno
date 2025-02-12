import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react' // Или твои иконки
import { pathKeys } from '~shared/lib/react-router'
import { formatDate } from '~shared/ui/date'

export const RecomendationList = ({ data }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  return (
    <Box className="relative">
      {/* Кастомные кнопки */}
      <button
        ref={prevRef}
        className={`absolute left-[45%] top-[350px] z-10 h-[48px] w-[48px] pl-[8px] r-lg:left-[5%] r-lg:right-[5%] 
        bg-gray-200 rounded-full bg-[#F4F4F5] transition-opacity ${
          isBeginning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
        disabled={isBeginning}
      >
        <ChevronLeft size={32} className="text-gray-500 hover:text-black" />
      </button>

      <button
        ref={nextRef}
        className={`absolute right-[45%] top-[350px] z-10 h-[48px] w-[48px] pl-[8px] 
        bg-gray-200 rounded-full bg-[#F4F4F5] transition-opacity ${
          isEnd ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
        disabled={isEnd}
      >
        <ChevronRight size={32} className="text-gray-500 hover:text-black" />
      </button>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        navigation={false} // Отключаем стандартные стрелки
        modules={[Navigation]}
        className="newsSwiper cursor-pointer"
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== 'boolean'
            ) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }
          })
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {data.map((item, index: number) => (
          <SwiperSlide key={index}>
            <Link to={pathKeys.news.bySlug(item.slug)}>
              <Box className="flex flex-col">
                <Box
                  component="img"
                  src={item.photo}
                  alt={item.title}
                  className="w-[464px] h-[264px] rounded-[8px]"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
