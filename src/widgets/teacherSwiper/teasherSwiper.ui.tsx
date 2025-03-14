import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import { SwiperNavigationButtons } from "~shared/ui/SwiperNavigationButtons";
import { useSpring, animated } from "@react-spring/web";
import { useMediaQuery } from "@mui/material";
import quote from "./assets/icon/quote.png";
import trophy from "./assets/icon/trophy.png";
import { useTranslation } from "react-i18next";
import { teacherQueryes } from "~entities/teacher";
import { Achievement, StaffMember } from "~entities/teacher/teacher.types";

export const CardSwiper: React.FC = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<any>(null);
  const isSmallScreen = useMediaQuery("(max-width: 1240px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const aboutSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });
  const listSpring = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(10px)" },
    reset: true,
  });

  const {
    data: teacherData,
    isError: teacherDataError,
    isLoading: teacherDataLoading,
  } = teacherQueryes.useGetTeacher();

  if (teacherDataError)
    return (
      <Typography variant="h2" className="text-center">
        Error 404!
      </Typography>
    );

  if (teacherDataLoading)
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );

  if (!teacherData)
    return (
      <div className="m-auto">
        <CircularProgress />
      </div>
    );

  return (
    <Container className="max-w-[1440px] r-sm:mb-20 mb-36">
      <Box className="text-center">
        <Typography
          variant="h2"
          className="text-[44px] font-light  r-md:text-[32px]"
        >
          {t("teacherSlider.title")}
        </Typography>

        <Typography
          variant="h2"
          className="text-[#52525B] text-4xl font-light pt-[8px] pb-[40px] r-md:pt-0 r-md:text-[28px]"
        >
          {t("teacherSlider.subtitle")}
        </Typography>

        <Box className="flex justify-center gap-x-[30px]">
          {!isSmallScreen && (
            <Box className="w-[464px] text-left">
              <Box className="max-w-[40px] rounded-[8px] p-[8px] bg-[#18181B] m-auto">
                <img src={quote} alt="quote" className="w-[24px] h-[24px]" />
              </Box>
              <Typography
                variant="h4"
                className="text-2xl font-medium my-4 text-center"
              >
                Обо мне
              </Typography>
              <animated.div style={aboutSpring}>
                <Typography
                  variant="body1"
                  className="text-[20px] font-light text-[#18181B]"
                >
                  {teacherData[activeIndex].aboutMe}
                </Typography>
              </animated.div>
            </Box>
          )}

          <Box className="flex flex-col items-center gap-2">
            <Swiper
              ref={swiperRef}
              loop
              speed={1000}
              autoplay={{ delay: 3000 }}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={2}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, EffectCoverflow, Autoplay]}
              breakpoints={{
                359: { slidesPerView: 1 },
                479: { slidesPerView: 2 },
              }}
              className="swiper-container max-w-[514px] max-h-[464px] py-12 r-xl-r:max-w-[767px] r-xl-r:max-h-[550px] r-md:max-w-[605px] r-mdl:max-w-[479px] r-sm:max-w-[369px] r-sm:max-h-[750px]"
            >
              {teacherData.map((teacher: StaffMember, index: number) => (
                <SwiperSlide
                  key={index}
                  className="max-w-[592px] swiper-slide flex justify-center"
                >
                  <div className="max-w-[442px] h-[440px] shadow-xl rounded-[20px] overflow-hidden">
                    <img
                      src={teacher.photo}
                      alt={teacher.fullName}
                      className="w-[592px] h-[440px] object-cover"
                    />
                    {index !== activeIndex && (
                      <div className="w-[258px] h-[440px] r-xl-r:w-[385px] r-md:w-[305px] absolute inset-0 bg-black/50 transition-opacity duration-500" />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-center">
              <Typography
                variant="h3"
                className="text-[#18181B] font-normal text-[32px]"
              >
                {teacherData[activeIndex].fullName}
              </Typography>
              <Typography
                variant="body2"
                className="text-[#18181B] font-normal text-base"
              >
                {teacherData[activeIndex].specialization}
              </Typography>
            </div>
            <SwiperNavigationButtons
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </Box>

          {!isSmallScreen && (
            <Box className="w-[464px]">
              <Box className="max-w-[40px] w-[40px] rounded-[8px] p-[8px] bg-[#18181B] m-auto">
                <img src={trophy} alt="trophy" className="w-[24px] h-[24px]" />
              </Box>
              <Typography
                variant="h4"
                className="text-2xl font-medium my-4 text-center"
              >
                Мои достижения
              </Typography>
              <animated.ol
                style={listSpring}
                className="list-decimal list-inside space-y-3 text-left"
              >
                {teacherData[activeIndex].achievements?.map(
                  (achievement: Achievement, index: number) => (
                    <li
                      key={index}
                      className="font-light text-[20px] text-[#18181B]"
                    >
                      {achievement.name}
                    </li>
                  )
                )}
              </animated.ol>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};
