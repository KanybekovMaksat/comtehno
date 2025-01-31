import React, { useState, useMemo } from "react"; 
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Container, Typography } from "@mui/material";
import { TeachersCard } from "~features/teachersCard";
import { NavigateBeforeOutlined, NavigateNext } from "@mui/icons-material";

export const Teachers: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = useMemo(() => TeachersCard({ goToSlide, setGoToSlide }), [goToSlide, setGoToSlide]);

  const currentTeacher = slides[goToSlide]?.content.props;

  return (
    <Container className="max-w-[1440px]">
      <Typography className="mb-4 text-center text-4xl font-medium" variant="h2">
        Наши преподаватели
      </Typography>
      <p className="mb-10 color-[#52525B] text-center text-2xl w-full">
          люди, которые вдохновляют учиться и развиваться
      </p>
      <div className="flex justify-between mb-20">
        <div>
          {currentTeacher && (
            <div className="flex items-center flex-col">
              <img src="../../../../src/shared/assets/img/category (1).svg" alt="" />
              <h1 className="text-[24px] font-[500] mt-2 mb-2">Oбо мне</h1>
              <p className="w-[464px] text-[19px]">
                {currentTeacher.aboutMe}
              </p>
            </div>
          )}
        </div>
        <div className="carousel__container h-[380px] w-[25%]" style={{ offset: "20px" }}>
        <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={1}
            showNavigation={false}
            animationConfig={config.gentle}
            />
        </div>
        <div>
          {currentTeacher && (
            <div className="flex items-center flex-col">
              <img src="../../../../src/shared/assets/img/category3.svg" alt="" />
              <h1 className="text-[24px] font-[500] mt-2 mb-2">Мои Достижения</h1>
              <ul className="w-[464px] list-decimal flex flex-col gap-4">
                {currentTeacher.achievements.map((achievement, index) => (
                  <li className="text-[19px]  font-geologica" key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {currentTeacher && (
        <div className="card__bottom-info text-center text-[16px] mb-5"> 
          <h1 className="mb-2 text-2xl text-center">{currentTeacher.name}</h1>
          <p className="mb-5 card__bottom-info--text font-geologica">{currentTeacher.jobTitle}</p>
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
    </Container>
  );
};


