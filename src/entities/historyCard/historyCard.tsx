import ImageDepartament from "../../features/aboutHistory/image/departament.svg";
import ImageAnketa from "../../features/aboutHistory/image/anketa.svg";
import ImageNormative from "../../features/aboutHistory/image/normative.svg";
import ImageReyting from "../../features/aboutHistory/image/reyting.svg";
import { Link } from "react-router-dom";

export const HistoryCard = () => {
  return (
    <div className="flex r-lg:flex-col gap-[24px]">
      <a
        href="https://bilimtrack.makalabox.com/auth"
        className="flex r-lg:w-full r-sm:h-[300px] r-md:h-[350px] flex-col justify-end relative rounded-[16px] p-[24px] w-[708px] h-[545px] bg-[#F4F4F5]"
        data-aos="fade-up"
      >
        <img
          className="absolute r-sm:w-[200px] r-md:w-[240px] right-[0px] top-[10px]"
          src={ImageReyting}
          alt=""
        />
        <h2 className="r-sm:text-[34px] mb-[24px] z-[2] text-[44px] break-words font-[300] text-[#18181B] leading-[55px]">
          Рейтинг студентов
        </h2>
        <p className="text-[28px] r-md:hidden block z-[2] font-[300] text-[#52525B] leading-[35px]">
          Рейтинг студентов отражает их успеваемость и достижения в учебе
        </p>
      </a>

      <div className="flex gap-[24px] flex-col">
        <div className="flex r-md:flex-col gap-[24px] justify-between">
          <Link
            to="/document/Digital-Technologies-and-Design"
            className="flex r-md:h-[150px] r-md:w-full flex-col r-lg:w-full justify-end relative rounded-[16px] p-[24px] w-[342px] h-[197px] bg-[#F4F4F5]"
            data-aos="fade-right"
          >
            <img
              className="absolute r-sm:w-[80px] r-md:w-[100px] right-[0px] top-[5px]"
              src={ImageNormative}
              alt=""
            />
            <h3 className="text-[36px] r-sm:text-[32px] z-[2] font-[300] text-[#18181B] leading-[45px]">
              IT Отделение
            </h3>
          </Link>
          <Link
            to="/document/otdelenie-ekonomiki-upravleniya-i-bankovskogo-dela"
            className="flex r-md:w-full r-md:h-[150px] r-lg:w-full flex-col justify-end relative rounded-[16px] p-[24px] w-[342px] h-[197px] bg-[#F4F4F5]"
            data-aos="fade-up"
          >
            <img
              className="absolute r-sm:w-[80px] r-sm:right-[10px] r-sm:top-[10px] r-md:w-[100px] right-[0px] top-[5px]"
              src={ImageAnketa}
              alt=""
            />
            <h3 className="text-[36px] r-sm:text-[32px] z-[2] font-[300] text-[#18181B] leading-[45px]">
              Отделение Экономики
            </h3>
          </Link>
        </div>

        <Link
          to="/document/studencheskoe-samoupravlenie"
          className="flex r-lg:w-full r-md:h-[250px] flex-col justify-end relative rounded-[16px] p-[24px] w-[708px] h-[324px] bg-[#F4F4F5]"
          data-aos="fade-right"
        >
          <img
            className="absolute r-sm:w-[120px] r-md:w-[150px] right-[0px] top-[10px]"
            src={ImageDepartament}
            alt=""
          />
          <h2 className="mb-[24px] r-sm:text-[36px] text-[44px] z-[2] font-[300] text-[#18181B] leading-[55px]">
            Студенческое самоуправление
          </h2>
          <p className="text-[28px] font-[300] r-sm:text-[24px] z-[2] text-[#52525B] leading-[35px]">
            деятельность студенческого совета
          </p>
        </Link>
      </div>
    </div>
  );
};
