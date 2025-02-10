import { PriceTagContact } from "~entities/priceTagContact/priceTagContact";

export const ErrorCard = () => {
  return (
    <div className="p-[24px] w-[586px] sm:h-[566px] bg-[#0D9488] rounded-[16px] flex flex-col justify-between gap-[24px] items-start">
      <h2 className="r-md:text-[32px] text-[44px] font-[300] r-md:leading-[40px] leading-[55px] text-[#FAFAFA]">
        Что-то случилось? <br /> Свяжитесь с нами
      </h2>
      <div
        className="flex w-full justify-center mt-2 space-x-4 max-sm:flex-col max-sm:items-center max-sm:gap-5"
      >
        <PriceTagContact />
      </div>
    </div>
  );
};
