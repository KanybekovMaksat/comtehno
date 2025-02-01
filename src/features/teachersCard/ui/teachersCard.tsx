import { useSpring, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

interface TeacherCardProps {
  imagen: string;
  aboutMe: string;
  achievements: string[];
  name: string;
  jobTitle: string;
  active: boolean;
  onClick: () => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ imagen, aboutMe, achievements, name, jobTitle, active, onClick }) => {
  const propsCard = useSpring({
    perspective: "1000px",
    transform: active ? "scale(1)" : "scale(1.1)",
    opacity: active ? "1" : "0.5",
    filter: active ? "brightness(1)" : "brightness(0.5)",
    config: { tension: 200, friction: 20 }, 
  });

  const [isHovered, setIsHovered] = useState(false); 

  return (
    <div>
      <animated.div className={`card ${active ? "flip" : ""} 
        rounded-xl flex flex-column items-center justify-center mt-5 max-sm:h-[320px] max-sm:w-[220px] max-lg:h-[320px]
        max-lg:w-[220px] max-xl:w-[280px] max-xl:h-[380px] xl:w-[300px] xl:h-[400px]`} 
        style={propsCard} onClick={onClick}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        >
        <div 
          className="card-inner duration-500 ease-in w-full h-full relative" 
          style={{ transformStyle: "preserve-3d", transform: isHovered && active ? "rotateY(180deg)" : "none"}}
        >
          <div className="card-front  top-0 bottom-0 left-0 right-0 absolute">
            <img className="w-full h-full object-cover rounded-xl" src={imagen} alt="" />
            {active && (
              <div className="w-[50px] h-[50px] absolute z-10 bottom-[-25px] left-1/2 transform -translate-x-1/2">
                <img src="../../../../src/shared/assets/img/category.svg" alt="Bottom Image" />
              </div>
            )}
          </div>
          <div className="card-back top-0 bottom-0 left-0 right-0 absolute rounded-xl text-center items-center bg-[#F4F4F5] max-sm:p-2 max-md:p-2 max-lg:p-5 lg:p-5 z-10"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
            <h1 className="max-sm:text-sm max-sm:mt-2 max-md:text-base max-lg:text-base lg:text-xl font-[500]">Oбо мне</h1>
            <p className="teachers__card-text max-sm:text-xs max-md:text-xs max-lg:text-xs lg:text-sm mt-1">{aboutMe}</p>
            {active && (
              <div className="w-[50px] h-[50px] absolute z-10 bottom-[-25px] left-1/2 transform -translate-x-1/2">
                <img src="../../../../src/shared/assets/img/category (1).svg" alt="Bottom Image" />
              </div>
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
};

interface TeachersCardProps {
  goToSlide: number;
  setGoToSlide: (index: number) => void;
}

export const TeachersCard = ({ goToSlide, setGoToSlide }: TeachersCardProps) => {
  const cardsData = [
    { key: uuidv4(),
      imagen: "../../../../src/shared/assets/img/cover.png", 
      name: "Каныбеков Максат",
      jobTitle: "Ментор по продукт и проектному менеджменту",
      aboutMe: "Я преподаю программирование в колледже КОМТЕХНО и работаю преподавателем Front-End уже 2 года. Обучение помогает мне развивать навыки общения и лидерства. Успешно совмещаю работу и учебу, увлечен созданием веб- и мобильных приложений, развиваюсь в Mobile Development",
      achievements: [
        "Окончил Бишкекский колледж с дипломом с отличием",
        "Получил сертификат за участие в хакатоне Startup Nation",
        "Стал финалистом хакатона Digital Technologies",
        "Получил диплом 1 степени на конференции Инновационные технологии"
      ],
    },
    { key: uuidv4(),
      imagen: "../../../../src/shared/assets/img/cover2.png", 
      name: "Малабакиев Рамзан",
      jobTitle: "Ментор по....",
      aboutMe: "Я преподаю программирование в колледже КОМТЕХНО и работаю преподавателем Front-End уже 2 года. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      achievements: [
        "Окончил Бишкекский колледж с дипломом с отличием",
        "Получил сертификат за участие в хакатоне Startup Nation",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        "Получил диплом 1 степени на конференции Инновационные технологии"
      ],
    },
    { key: uuidv4(),
      imagen: "../../../../src/shared/assets/img/cover3.png", 
      name: "Петров Даниил",
      jobTitle: "Ментор по...",
      aboutMe: "Я преподаю программирование в колледже КОМТЕХНО и работаю преподавателем Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      achievements: [
        "Окончил Бишкекский колледж с дипломом с отличием",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        "Стал финалистом хакатона Digital Technologies",
        "Получил диплом 1 степени на конференции Инновационные технологии"
      ],
    },
  ];
  return cardsData.map((item, index) => ({
    key: item.key,
    content: <TeacherCard imagen={item.imagen} aboutMe={item.aboutMe} achievements={item.achievements} name={item.name} jobTitle={item.jobTitle} active={index === goToSlide} onClick={() => setGoToSlide(index)} />,
    onClick: () => setGoToSlide(index),
  }));
};
