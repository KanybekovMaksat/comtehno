import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Container, Typography, Box } from "@mui/material";
import { SwiperNavigationButtons } from "~shared/ui/SwiperNavigationButtons";
import { useSpring, animated } from "@react-spring/web";
import { useMediaQuery } from "@mui/material";

import maks from "./assets/img/maksat.png";
import danil from "./assets/img/danil.png";
import ramzan from "./assets/img/ramzan.png";
import quote from "./assets/icon/quote.png";
import trophy from "./assets/icon/trophy.png";
import ormon from "./assets/img/Ormon.png";
import danya from "./assets/img/Даня.jpg";
import Ahmed from "./assets/img/Ахмед.jpg";
import Kuma from "./assets/img/Кума.png";
const teachers = [
  {
    id: 1,
    name: "Каныбеков Максат",
    role: "Ментор по продукт и проектному менеджменту",
    image: maks,
    about:
      "Я преподаю программирование в колледже КОМТЕХНО и работаю преподавателем Front-End уже 2 года. Обучение помогает мне развивать навыки общения и лидерства. Успешно совмещаю работу и учебу, увлечен созданием веб- и мобильных приложений, развиваюсь в Mobile Development.",
    achievements: [
      "Окончил Бишкекский колледж с дипломом с отличием",
      "Получил сертификат за участие в хакатоне Startup Nation",
      "Стал финалистом хакатона Digital Technologies",
      "Получил диплом 1 степени на конференции Инновационные технологии",
    ],
  },
  {
    id: 2,
    name: "Петров Данил",
    role: "Преподаватель Back-End разработки",
    image: danil,
    about:
      "Я преподаю программирование в колледже КОМТЕХНО и работаю преподавателем Back-End уже 5 лет. Обучение помогает мне развивать навыки общения и лидерства. Успешно совмещаю работу и учебу Опытный разработчик с 5-летним стажем. Преподаю Back-End разработку и учу студентов создавать масштабируемые серверные приложения.",
    achievements: [
      "Победитель хакатона CodeFest 2023",
      "Автор курса по Node.js на платформе Udemy",
      "Победитель хакатона Frontend Nation",
      "Автор курса по React на платформе Udemy",
    ],
  },
  {
    id: 3,
    name: "Эрнистов Данил",
    role: "Студент ПОАС-3-22",
    image: danya,
    about:
      "Опытный дизайнер с 10-летним стажем. Преподаю UI/UX дизайн и помогаю студентам создавать удобные интерфейсы. Дизайнер с опытом работы в крупных компаниях. Преподаю основы UI/UX дизайна и помогаю студентам создавать удобные интерфейсы.",

    achievements: [
      "Автор курса по Figma на платформе Coursera",
      "Победитель хакатона Город будущего",
      "Дизайнер проекта Tanda",
      "Чиловый парень",
      "Автор курса по Figma на платформе Udemy",
    ],
  },
  {
    id: 4,
    name: "Рамзан",
    role: "Преподаватель UI/UX дизайна",
    image: ramzan,
    about:
      "Опытный дизайнер с 10-летним стажем. Преподаю UI/UX дизайн и помогаю студентам создавать удобные интерфейсы. Дизайнер с опытом работы в крупных компаниях. Преподаю основы UI/UX дизайна и помогаю студентам создавать удобные интерфейсы.",

    achievements: [
      "Победитель конкурса Design Awards 2022",
      "Автор курса по Figma на платформе Coursera",
      "Победитель хакатона Frontend Nation",
      "Автор курса по Figma на платформе Udemy",
    ],
  },
  {
    id: 5,
    name: "Мамбеткулов Ормон",
    role: "Студент ПОАС-3-22",
    image: ormon,
    about:
      "Опытный разработчик с 3-летним стажем. Работал над множеством проектов, включая сайты и приложения для колледжей и бизнеса. Мой опыт в создании интерфейсов и оптимизации пользовательского опыта позволяет обучать студентов созданию эффективных и удобных веб-решений. Активно использую библиотеки и фреймворки, такие как React и Material UI, для разработки интерактивных и динамичных приложений.",

    achievements: [
      "Преподаватель на курсах Codify",
      "Победитель хакатона TUNDUK",
      "Победитель хакатона Город будущего",
      "Победитель хакатона IT-FEST",
      "Автор проекта Tanda",
      "Разработчик модерации в Makalabox",
    ],
  },
  {
    id: 6,
    name: "Сартов Ахмед",
    role: "Преподователь FrontEnd",
    image: Ahmed,
    about:
      "Я преподаю программирование в колледже КОМТЕХНО и работаю преподавателем Front-End уже 2 года. Обучение помогает мне развивать навыки общения и лидерства. Успешно совмещаю работу и учебу, увлечен созданием веб- и мобильных приложений, развиваюсь в Mobile Development.",
    achievements: [
      "Окончил Бишкекский колледж с дипломом с отличием",
      "Получил сертификат за участие в хакатоне Startup Nation",
      "Стал финалистом хакатона Digital Technologies",
      "Получил диплом 1 степени на конференции Инновационные технологии",
    ],
  },
  {
    id: 7,
    name: "Курманбек",
    role: "Преподаватель Back-End разработки",
    image: Kuma,
    about:
      "Я преподаю программирование в колледже КОМТЕХНО и работаю преподавателем Back-End уже 5 лет. Обучение помогает мне развивать навыки общения и лидерства. Успешно совмещаю работу и учебу Опытный разработчик с 5-летним стажем. Преподаю Back-End разработку и учу студентов создавать масштабируемые серверные приложения.",
    achievements: [
      "Победитель хакатона CodeFest 2023",
      "Автор курса по Node.js на платформе Udemy",
      "Победитель хакатона Frontend Nation",
      "Автор курса по React на платформе Udemy",
    ],
  },
];

export const CardSwiper: React.FC = () => {
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

  return (
    <Container className="max-w-[1440px] r-sm:mb-20 mb-36">
      <Box className="text-center">
        <Typography
          variant="h2"
          className="text-[44px] font-light  r-md:text-[32px]"
        >
          Наши преподаватели
        </Typography>

        <Typography
          variant="h2"
          className="text-[#52525B] text-4xl font-light pt-[8px] pb-[40px] r-md:pt-0 r-md:text-[28px]"
        >
          люди, которые вдохновляют учиться и развиваться
        </Typography>

        <Box className="flex justify-center gap-x-[30px] ">
          {!isSmallScreen && (
            <Box className="w-[464px] text-left   ">
              <Box className=" max-w-[40px] rounded-[8px] p-[8px] bg-[#18181B] m-auto">
                <img src={quote} alt="quote" className="w-[24px] h-[24px] " />
              </Box>
              <Typography
                variant="h4"
                className="text-2xl font-medium my-4 text-center"
              >
                Обо мне
              </Typography>
              <animated.div style={aboutSpring}>
                {" "}
                <Typography
                  variant="body1"
                  className="text-[20px] font-light text-[#18181B]"
                >
                  {teachers[activeIndex].about}
                </Typography>
              </animated.div>
            </Box>
          )}

          <Box className="flex flex-col items-center gap-2">
            <Swiper
              ref={swiperRef}
              loop={true}
              speed={1000}
              autoplay={{ delay: 3000 }}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
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
                359: {slidesPerView:1},
                479: {slidesPerView:2}
              }}
              className="swiper-container max-w-[514px] max-h-[500px] py-12 r-xl-r:max-w-[767px] r-xl-r:max-h-[550px]  r-md:max-w-[605px] r-mdl:max-w-[479px] r-sm:max-w-[369px] r-sm:max-h-[500px]"
            >
              {teachers.map((teacher, index) => (
                <SwiperSlide
                  key={teacher.id}
                  className="max-w-[592px] swiper-slide flex justify-center"
                >
                  <div className="max-w-[442px] h-[440px]  shadow-xl rounded-[20px] overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className=" w-[592px] h-[440px]  object-cover "
                    />
                    {index !== activeIndex && (
                      <div className=" w-[258px] h-[440px] r-xl-r:w-[385px]   r-md:w-[305px] absolute inset-0 bg-black/50 transition-opacity duration-500" />
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
                {teachers[activeIndex].name}
              </Typography>
              <Typography
                variant="body2"
                className="text-[#18181B] font-normal text-base"
              >
                {teachers[activeIndex].role}
              </Typography>
            </div>
            <SwiperNavigationButtons
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </Box>
          {!isSmallScreen && (
            <Box className="w-[464px] ">
              <Box className="max-w-[40px] w-[40px] rounded-[8px] p-[8px] bg-[#18181B] m-auto">
                <img src={trophy} alt="" className="w-[24px] h-[24px]" />
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
                {teachers[activeIndex].achievements.map(
                  (achievement, index) => (
                    <li
                      key={index}
                      className="font-light text-[20px] text-[#18181B]"
                    >
                      {achievement}
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
