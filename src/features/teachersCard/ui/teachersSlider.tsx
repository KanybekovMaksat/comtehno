import React, { useState, useMemo, useCallback } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { TeachersCard } from "~features/teachersCard";
import { NavigateBeforeOutlined, NavigateNext } from "@mui/icons-material";

export const TeachersSlider: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = useMemo(() => TeachersCard({ goToSlide, setGoToSlide }), [goToSlide]);

  const currentTeacher = slides[goToSlide]?.content.props;

  return (
    <div className="flex flex-col mb-10 items-center w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="flex w-full flex-col md:flex-row max-md:items-center  justify-between">
        {currentTeacher && (
          <div className="hidden md:flex flex-col items-center w-full md:w-1/3">
            <img src="../../../../src/shared/assets/img/category (1).svg" alt="" className="w-12 h-12" />
            <h1 className="text-lg lg:text-2xl font-medium mt-2 mb-2">Обо мне</h1>
            <p className="text-sm md:text-base lg:text-lg w-full max-w-[464px] mx-auto">
              {currentTeacher.aboutMe}
            </p>
          </div>
        )}

        <div className="carousel__container max-sm:h-[380px] max-md:h-[300px] max-lg:h-[380px] max-sm:w-[50%] max-md:w-[45%] max-lg:w-[28%] lg:w-[28%]" style={{ offset: "20px" }}>
          <Carousel slides={slides} goToSlide={goToSlide} offsetRadius={1} showNavigation={false} animationConfig={config.gentle} style={{ transform: 'scale(1)' }} />
        </div>

        {currentTeacher && (
          <div className="hidden md:flex flex-col items-center w-full md:w-1/3 text-center">
            <img src="../../../../src/shared/assets/img/category3.svg" alt="" className="w-11 h-11" />
            <h1 className="text-lg lg:text-2xl font-medium mt-2 mb-2">Мои Достижения</h1>
            <ul className="list-decimal text-left pl-5 md:pl-10 space-y-2 lg:space-y-4">
              {currentTeacher.achievements.map((achievement, index) => (
                <li key={index} className="text-sm md:text-base lg:text-lg">{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {currentTeacher && (
        <div className="text-center sm:mt-10 mt-8">
          <h1 className="max-sm:text-md text-xl lg:text-2xl mb-2">{currentTeacher.name}</h1>
          <p className="max-sm:text-sm text-md font-geologica mb-5">{currentTeacher.jobTitle}</p>
          <div className="flex justify-center gap-4">
            <button 
              className="bg-[#F4F4F5] items-center rounded-full p-2"
              onClick={() => setGoToSlide(goToSlide === 0 ? slides.length - 1 : goToSlide - 1)}
            >
              <NavigateBeforeOutlined />
            </button>
            <button 
              className="bg-[#F4F4F5] items-center rounded-full p-2"
              onClick={() => setGoToSlide(goToSlide === slides.length - 1 ? 0 : goToSlide + 1)}
            >
              <NavigateNext />
            </button> 
          </div>
        </div>
      )}
    </div>
  );
};
