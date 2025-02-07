import React, { useState, useMemo } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { TeachersCard } from "~features/teachersCard";
import { NavigateBeforeOutlined, NavigateNext } from "@mui/icons-material";

export const TeachersSlider: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = useMemo(() => TeachersCard({ goToSlide, setGoToSlide }), [goToSlide]);

  const currentTeacher = slides[goToSlide]?.content.props;

  return (
    <div className="flex flex-col mb-10 items-center w-full">
      <div className="flex w-full r-lg:flex-row r-lg:justify-center justify-between">
        {currentTeacher && (
          <div className="flex flex-col items-center w-full w-1/3 r-md:hidden">
            <img
              src="../../../../src/shared/assets/img/category (1).svg"
              alt=""
              className="w-12 h-12"
            />
            <h1 className="r-lg:text-lg text-2xl font-medium mt-2 mb-2">
              Обо мне
            </h1>
            <p className="r-lg:text-base text-lg w-full r-lg:max-w-[340px] max-w-[464px]">
              {currentTeacher.aboutMe}
            </p>
          </div>
        )}
        <div
          className="carousel__container r-sm:h-[380px] r-sm:w-[38%] r-md:h-[380px] r-md:w-[40%] 
          r-lg:h-[300px] r-lg:w-[65%] h-[400px] w-[58%]"
        >
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={1}
            showNavigation={false}
            animationConfig={config.gentle}
          />
        </div>

        {currentTeacher && (
          // Аналогично: скрываем на экранах ниже 768px
          <div className="flex flex-col items-center w-full w-1/3 text-center r-md:hidden">
            <img
              src="../../../../src/shared/assets/img/category3.svg"
              alt=""
              className="w-11 h-11"
            />
            <h1 className="r-lg:text-lg text-2xl font-medium mt-2 mb-2">
              Мои Достижения
            </h1>
            <ul className="max-w-[464px] r-lg:max-w-[340px] list-decimal text-left pl-5 r-lg:pl-10 space-y-2 space-y-4">
              {currentTeacher.achievements.map((achievement: string, index: number) => (
                <li key={index} className="r-sm:text-sm r-lg:text-base text-lg">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {currentTeacher && (
        <div className="text-center r-sm:mt-10 r-md:mt-12 mt-8">
          <h1 className="r-sm:text-md text-xl text-2xl mb-2">
            {currentTeacher.name}
          </h1>
          <p className="r-sm:text-sm text-md font-geologica mb-5">
            {currentTeacher.jobTitle}
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-[#F4F4F5] items-center rounded-full p-2"
              onClick={() =>
                setGoToSlide(goToSlide === 0 ? slides.length - 1 : goToSlide - 1)
              }
            >
              <NavigateBeforeOutlined />
            </button>
            <button
              className="bg-[#F4F4F5] items-center rounded-full p-2"
              onClick={() =>
                setGoToSlide(goToSlide === slides.length - 1 ? 0 : goToSlide + 1)
              }
            >
              <NavigateNext />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
