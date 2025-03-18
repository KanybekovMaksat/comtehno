import ImageHistory from "../../features/aboutHistory/image/history.svg";
import ImageIntroduction from "../../features/aboutHistory/image/introduction.svg";
import ImageManagement from "../../features/aboutHistory/image/management.svg";
import { Link } from "react-router-dom";

export const AboutHistoryCardCollege = () => {
  return (
    <div className="flex r-lg:flex-wrap justify-between gap-[20px]">
      <Link
        className="flex r-md:h-[300px] r-lg:w-full flex-col justify-end relative rounded-[16px] p-[24px] w-[586px] h-[400px] bg-[#F4F4F5]"
        data-aos="fade-right"
        to="/document/direktorat"
      >
        <img
          className="absolute r-sm:w-[200px] r-md:w-[250px] right-[0px] top-[10px]"
          src={ImageHistory}
          alt=""
        />
        <h2 className="mb-3 r-sm:text-[36px] text-[44px] z-[2] font-[300] text-[#18181B] leading-[55px]">
          Директорат
        </h2>
        <p className="text-[28px] r-sm:text-[20px] font-[300] z-[2] text-[#52525B] leading-[35px]">
          Директорат обеспечивает руководство и развитие колледжа
        </p>
      </Link>

      <Link
        data-aos="fade-up"
        to="/timetable/"
        className="flex r-md:h-[300px] r-lg:w-[700px] flex-col justify-end relative rounded-[16px] p-[24px] w-[400px] h-[400px] bg-[#F4F4F5]"
      >
        <img
          className="absolute w-60 r-sm:w-[150px] r-md:w-[200px] right-[0px] top-[10px]"
          src={ImageIntroduction}
          alt="img"
        />
        <h2 className="mb-3 r-sm:text-[36px] z-[2] text-[44px] font-[300] text-[#18181B] leading-[55px]">
          Расписание
        </h2>
        <p className="text-[28px] font-[300] r-sm:text-[20px] z-[2] text-[#52525B] leading-[35px]">
          Расписание занятий организовано для удобства студентов и эффективного
          обучения
        </p>
      </Link>

      <Link
        data-aos="fade-left"
        to="/parlaments"
        className="flex r-md:h-[300px] r-lg:w-[700px] flex-col justify-end relative rounded-[16px] p-[24px] w-[400px] h-[400px] bg-[#F4F4F5]"
      >
        <img
          className="absolute w-60 r-sm:w-[200px] r-md:w-[250px] right-[0px] top-[10px]"
          src={ImageManagement}
          alt="img"
        />
        <h2 className="text-[44px] mb-3 r-sm:text-[18px] z-[2] font-[300] text-[#18181B] leading-[45px]">
          Студенческое самоуправление
        </h2>
        <p className="text-[28px] font-[300] r-sm:text-[20px] z-[2] text-[#52525B] leading-[35px]">
          Это актив студентов, который занимается организацией мероприятий,
          решением важных вопросов учебной и внеучебной жизни, а также
          представляет интересы студентов перед администрацией колледжа.
        </p>
      </Link>
    </div>
  );
};
