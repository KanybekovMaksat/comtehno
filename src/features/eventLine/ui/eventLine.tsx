import React, { useEffect } from "react";
import { Container } from "@mui/material";
import EventLineImage from "../svg/eventLine.svg";
import { events } from "../model/eventData";
import AOS from "aos";
import "aos/dist/aos.css";

export const EventLine: React.FC = () => {
  useEffect(() => {
    // Инициализация AOS с параметром once: false, чтобы анимация повторялась при скроллинге
    AOS.init({
      duration: 900,
      once: false, // Повторение анимации при повторном скроллинге
      easing: "ease-in-out",
    });

    // Обработчик событий для обновления AOS при прокрутке
    window.addEventListener("scroll", AOS.refresh);

    return () => {
      // Очистить обработчик при размонтировании компонента
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  return (
    <Container className="max-w-[1440px] px-0">
      <div className="flex flex-col pb-[120px] r-md:pb-[80px] r-xl:items-center items-start justify-center">
        {events.map((event, index) => (
          <div key={index} className="flex r-sm:gap-[6px] gap-[8px]">
            {index % 2 === 0 ? (
              <>
                <img
                  className="r-md:block hidden"
                  src={EventLineImage}
                  alt="Event Image"
                />
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className="bg-[#F4F4F5] r-sm:w-[380px] w-[404px] r-md:h-[206px] h-[228px] rounded-[8px] p-[16px] r-md:text-left text-right"
                >
                  <p className="font-[400] text-[19px] leading-[23.75px] text-[#0F766E]">
                    {event.startTime} - {event.endTime}
                  </p>
                  <h2 className="font-[400] text-[24px] leading-[30px]">
                    {event.title}
                  </h2>
                  <p className="font-[300] text-[20px] leading-[32px] text-[#52525B]">
                    {event.description}
                  </p>
                </div>
                <img
                  className="r-md:hidden block"
                  src={EventLineImage}
                  alt="Event Image"
                />
                <div className="r-md:hidden block w-[404px] h-[228px] rounded-[8px] p-[16px]" />
              </>
            ) : (
              <>
                <div className="r-md:hidden block w-[404px] h-[228px] rounded-[8px] p-[16px]" />
                <img src={EventLineImage} alt="Event Image" />
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className="bg-[#F4F4F5] r-sm:w-[380px] r-md:h-[206px] w-[404px] h-[228px] rounded-[8px] p-[16px] text-left"
                >
                  <p className="font-[400] r-sm:text-[17px] text-[19px] leading-[23.75px] text-[#0F766E]">
                    {event.startTime} - {event.endTime}
                  </p>
                  <h2 className="r-sm:text-[22px] font-[400] text-[24px] leading-[30px]">
                    {event.title}
                  </h2>
                  <p className="font-[300] r-sm:text-[18px] text-[20px] leading-[32px] text-[#52525B]">
                    {event.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};
