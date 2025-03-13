import { Link } from "react-router-dom";
import ImageCssTeap from "../../features/aboutHistory/image/cssTeap.svg";
import ImageRecktorat from "../../features/aboutHistory/image/recktorat.svg";

export const AboutHistoryCard = () => {
  return (
    <div className="flex r-md:flex-col gap-[24px]">
      <Link
        to="/document/admissions_committee"
        className="flex flex-col r-md:h-[270px] r-md:w-full justify-end relative rounded-[16px] p-[24px] w-[708px] h-[324px] bg-[#F4F4F5]"
        data-aos="fade-right"
      >
        <img
          className="absolute r-sm:w-[180px] right-[0px] top-[10px]"
          src={ImageCssTeap}
          alt=""
        />
        <h2 className="mb-[24px] z-[2] r-sm:text-[36px] text-[44px] font-[300] text-[#18181B] leading-[55px]">
          Приёмная комиссия
        </h2>
        <p className="text-[28px] z-[2] r-sm:text-[20px] font-[300] text-[#52525B] leading-[35px]">
          Приёмная комиссия занимается поступлением абитуриентов, консультирует
          и оформляет документы
        </p>
      </Link>
      <Link
        to="/#partner"
        className="flex flex-col r-sm:h-[270px] r-md:w-full justify-end relative rounded-[16px] p-[24px] w-[708px] h-[324px] bg-[#F4F4F5]"
        data-aos="fade-up"
      >
        <img
          className="absolute r-sm:w-[200px] right-[0px] top-[10px]"
          src={ImageRecktorat}
          alt=""
        />
        <h2 className="r-sm:text-[36px] mb-[24px] z-[2] text-[44px] font-[300] text-[#18181B] leading-[55px]">
          Партнёры
        </h2>
        <p className="text-[28px] r-sm:text-[20px] z-[2] font-[300] text-[#52525B] leading-[35px]">
          Партнёры колледжа помогают в развитии и предоставляют возможности для
          студентов
        </p>
      </Link>
    </div>
  );
};
