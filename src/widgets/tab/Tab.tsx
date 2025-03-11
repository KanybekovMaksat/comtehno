import { VerifiedIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { pathLinks } from "~shared/lib";

export const Tab: React.FC = () => {
  return (
    <div className="h-16 r-md:h-12 w-full m-0 flex items-center justify-around z-10 bg-opacity-30 bg-[#0F766E] fixed">
      <div className="flex items-center r-lg:gap-6 r-md:gap-4 gap-10">
        <span className="text-2xl r-lg:text-xl r-md:text-sm bg-primary px-2 py-1 rounded-xl text-white">
          Время выбрать себя
        </span>
        <Link
          target="_blanck"
          to={pathLinks.whatsapp}
          className="bg-sun text-2xl flex rotate-3 r-lg:text-xl items-center animate-bounce hover:bg-[#2275C7] px-2 cursor-pointer hover:scale-105 transition-all py-1 rounded-xl text-white"
        >
          <span className="mr-2 r-md:text-sm">Оставьте заявку</span>
          <VerifiedIcon />
        </Link>
      </div>
      <span className="text-lg r-lg:text-xl r-md:hidden r-md:text-base rotate-3 bg-primary px-4 py-1 rounded-xl text-white">
        Лучше сейчас чем никогда!
      </span>
    </div>
  );
};
