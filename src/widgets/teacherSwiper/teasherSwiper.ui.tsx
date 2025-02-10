import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Container, Typography, Box } from "@mui/material";
import { SwiperNavigationButtons } from "~shared/ui/SwiperNavigationButtons";
import { useSpring, animated } from "@react-spring/web";
import gsap from "gsap";
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

  useEffect(() => {
    gsap.fromTo(
      ".swiper-slide img",
      { opacity: 0, scale: 1 },
      { opacity: 1, scale: 1, duration: 0.1 }
    );
  }, [activeIndex]);
  return (
    <Container className="max-w-[1440px]">
      <Box className="text-center">
        <Typography variant="h2" className="text-[44px] font-light">
          Наши преподаватели
        </Typography>

        <Typography
          variant="h2"
          className="text-[#52525B] text-4xl font-light pt-[8px] pb-[40px]"
        >
          люди, которые вдохновляют учиться и развиваться
        </Typography>

        <Box className="flex  justify-center gap-x-[90px]">
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

          <Box className="flex flex-col items-center gap-2">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              initialSlide={1}
              modules={[EffectCards]}
              className="w-[342px] h-[464px]"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {teachers.map((teacher) => (
                <SwiperSlide key={teacher.id}>
                  <div className="w-full h-full shadow-xl rounded-lg overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-[342px] h-[464px] object-cover"
                    />
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
              {teachers[activeIndex].achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="font-light text-[20px] text-[#18181B]"
                >
                  {achievement}
                </li>
              ))}
            </animated.ol>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
