import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React from "react";
interface SwiperNavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const SwiperNavigationButtons: React.FC<
  SwiperNavigationButtonsProps
> = ({ onPrev, onNext }: SwiperNavigationButtonsProps) => {
  return (
    <div className="flex justify-center gap-4 my-4 ">
      <Button
        variant="contained"
        onClick={onPrev}
        className="p-[0] w-[48px] h-[48px] min-w-[0] bg-[#F4F4F5] rounded-full text-black hover:transition-colors duration-300"
      >
        <KeyboardArrowLeftIcon />
      </Button>
      <Button
        variant="contained"
        onClick={onNext}
        className=" p-[0] w-[48px] h-[48px] min-w-[0] bg-[#F4F4F5] text-black rounded-full hover:transition-colors duration-300"
      >
        <KeyboardArrowRightIcon />
      </Button>
    </div>
  );
};
