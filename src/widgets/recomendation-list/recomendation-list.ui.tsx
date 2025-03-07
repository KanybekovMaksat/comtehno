import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Или твои иконки
import { pathKeys } from "~shared/lib/react-router";
import { formatDate } from "~shared/ui/date";
import { newsTypes } from "~entities/news";

export const RecomendationList = ({ data, slug }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <Box className="relative r-lg:hidden">
        {/* Кастомные кнопки */}
        <button
          ref={prevRef}
          className={`absolute left-[40%] top-[380px] z-10 h-[48px] w-[48px] 
            pl-[8px]  
        bg-gray-200 rounded-full bg-[#F4F4F5] transition-opacity ${
          isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
          disabled={isBeginning}
        >
          <ChevronLeft size={32} className="text-gray-500 hover:text-black" />
        </button>

        <button
          ref={nextRef}
          className={`absolute right-[40%] top-[380px] z-10 h-[48px] w-[48px] pl-[8px] 
        bg-gray-200 rounded-full bg-[#F4F4F5] transition-opacity ${
          isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
          disabled={isEnd}
        >
          <ChevronRight size={32} className="text-gray-500 hover:text-black" />
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation={false} // Отключаем стандартные стрелки
          modules={[Navigation]}
          className="newsSwiper cursor-pointer"
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {data.map((item, index: number) => (
            <SwiperSlide key={index}>
              <Link to={pathKeys.news.bySlug(item.slug)}>
                <div className="flex max-w-md flex-col">
                  <Box
                    component="img"
                    src={item.photo}
                    alt={item.title}
                    className="w-[464px] h-[264px] rounded-[8px] mb-3"
                  />
                  <Box className="flex mb-2 gap-2 items-center">
                    <Typography className="bg-sun text-white px-2 rounded-md text-[20px]">
                      {formatDate(item.createdAt)}
                    </Typography>
                    <Typography className="bg-primary text-white px-2 rounded-md">
                      {item.category.name}
                    </Typography>
                  </Box>
                  <Typography className="bg-primary py-1 text-white px-2 rounded-md">
                    {item.title}
                  </Typography>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Box className="hidden r-lg:flex flex-col gap-3">
        {data.map((item: newsTypes.News) => {
          if (item.slug != slug)
            return (
              <Link to={`/news/${item.slug}`} key={item.slug}>
                <Box>
                  <Box
                    component={"img"}
                    src={item.photo}
                    alt={item.title}
                    className="w-full"
                  ></Box>
                  <Box className="flex items-center gap-1">
                    <Typography variant="subtitle2" className="">
                      {formatDate(item.createdAt)}
                    </Typography>
                    <Typography className="uppercase text-primary">
                      {item.category.name}
                    </Typography>
                  </Box>
                  <Typography variant="h6" className="text-[22px] font-normal">
                    {item.title}
                  </Typography>
                </Box>
              </Link>
            );
        })}
      </Box>
      <Link to={pathKeys.news.root()} className="hidden r-lg:block">
        <Button
          variant="outlined"
          className="w-full border-black border-opacity-50 text-black lowercase"
        >
          Все новости
        </Button>
      </Link>
    </>
  );
};
