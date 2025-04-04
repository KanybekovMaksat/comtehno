import { Internship, TimeStudy } from "~entities/priceTagCard/priceTagCard";
import { PriceTagContact } from "~entities/priceTagContact/priceTagContact";

export const PriceTag: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between r-lg:justify-center">
      <div className="mb-[24px] flex flex-col gap-[24px]">
        <div className="max-w-[830px] rounded-[16px] h-[164px] p-[24px] bg-[#0D9488]">
          <h2 className="mb-[16px] text-[28px] sm:text-[36px] font-[400] sm:font-[300] leading-[27.75px] text-[#FAFAFA]">
            Стоимость обучения
          </h2>
          <h2 className="text-[33px] md:text-[44px] font-[700] leading-[55px] text-[#FAFAFA]">
            55 000 сом в год
          </h2>
        </div>
        <div className="flex flex-wrap gap-[24px]">
          <TimeStudy />
          <Internship />
        </div>
        <div className="rounded-[16px] bg-[#F4F4F5] sm:w-[830px] p-[16px]">
          <h2 className="mb-[16px] text-[28px] md:text-[28px] font-[400] leading-[35px] text-[#18181B]">
            Навыки
          </h2>
          <ol className="flex flex-col gap-[16px]">
            <li className="text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]">
              — Диплом о среднем профессиональном образовании
            </li>
            <li className="text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]">
              — Практика от наших компаний-партнеров
            </li>
            <li className="text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]">
              — Внеучебные активности
            </li>
          </ol>
        </div>
      </div>
      <div className="p-[24px] r-lg:w-[640px] w-[500px] bg-[#0D9488] rounded-[16px] flex flex-col justify-between gap-[24px] items-start">
        <h2 className="text-[32px] sm:pl-[24px] sm:text-[44px] font-[300] leading-[40px] sm:leading-[55px] text-[#FAFAFA]">
          Хотите поступить? <br /> Свяжитесь с нами
        </h2>
        <PriceTagContact />
      </div>
    </div>
  );
};
