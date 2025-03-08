import ImageHistory from "../../features/aboutHistory/image/history.svg";
import ImageIntroduction from "../../features/aboutHistory/image/introduction.svg";
import ImageAccerditation from "../../features/aboutHistory/image/accreditation.svg";
import ImageManagement from "../../features/aboutHistory/image/management.svg";
import ImageStudies from "../../features/aboutHistory/image/studies.svg";
import { Link } from "react-router-dom";

export const AboutHistoryCardCollege = () => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("speciality-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex r-lg:flex-wrap justify-between gap-[20px]">
      <div
        className="flex r-md:h-[300px] r-lg:w-full flex-col justify-end relative rounded-[16px] p-[24px] w-[586px] h-[400px] bg-[#F4F4F5]"
        data-aos="fade-right"
      >
        <img
          className="absolute r-sm:w-[200px] r-md:w-[250px] right-[0px] top-[10px]"
          src={ImageHistory}
          alt=""
        />
        <h2 className="mb-[24px] r-sm:text-[36px] text-[44px] z-[2] font-[300] text-[#18181B] leading-[55px]">
          История колледжа
        </h2>
        <p className="text-[28px] r-sm:text-[20px] font-[300] z-[2] text-[#52525B] leading-[35px]">
          информация о становлении и развитии колледжа.
        </p>
      </div>

      <div
        className="flex r-md:flex-wrap justify-between gap-[24px] r-lg:w-full r-xl:w-[700px]"
        data-aos="fade-up"
      >
        <Link
          to="/document/Department-of-Educational"
          className="flex r-md:h-[300px] r-lg:w-[700px] flex-col justify-end relative rounded-[16px] p-[24px] w-[586px] h-[400px] bg-[#F4F4F5]"
        >
          <img
            className="absolute r-sm:w-[150px] r-md:w-[200px] right-[0px] top-[10px]"
            src={ImageIntroduction}
            alt=""
          />
          <h2 className="mb-[24px] r-sm:text-[36px] z-[2] text-[44px] font-[300] text-[#18181B] leading-[55px]">
            ООККО
          </h2>
          <p className="text-[28px] font-[300] r-sm:text-[20px] z-[2] text-[#52525B] leading-[35px]">
            миссия и цели образовательного учреждения. Аккредитация – сведения о
            лицензиях и аккредитации колледжа.
          </p>
        </Link>

        <div
          className="flex flex-col r-md:w-full r-md:flex-wrap r-md:gap-[24px] justify-between"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-[24px] r-md:flex-row">
            <Link
              to="/timetable"
              className="flex r-md:w-full flex-col justify-end relative rounded-[16px] p-[24px] w-[220px] h-[117px] bg-[#F4F4F5]"
            >
              <img
                className="absolute r-md:w-[60px] right-[0px] top-[5px]"
                src={ImageAccerditation}
                alt=""
              />
              <h3 className="text-[24px] z-[2] r-sm:text-[18px] font-[300] text-[#18181B] leading-[30px]">
                Расписание
              </h3>
            </Link>
            <Link
              to="/documents"
              className="flex r-md:w-full flex-col justify-end relative rounded-[16px] p-[24px] w-[220px] h-[117px] bg-[#F4F4F5]"
            >
              <img
                className="absolute right-[0px] r-md:w-[60px] top-[5px]"
                src={ImageManagement}
                alt=""
              />
              <h3 className="text-[24px] r-sm:text-[18px] z-[2] font-[300] text-[#18181B] leading-[30px]">
                Учебное управление
              </h3>
            </Link>
          </div>
          <a
            href="#speciality-section"
            onClick={handleScroll}
            className="flex r-md:w-full flex-col justify-end relative rounded-[16px] p-[24px] w-[220px] h-[117px] bg-[#F4F4F5]"
            data-aos="fade-right"
          >
            <img
              className="absolute right-[0px] top-[5px]"
              src={ImageStudies}
              alt=""
            />
            <h3 className="text-[24px] z-[2] font-[300] text-[#18181B] leading-[30px]">
              Специальности
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};
