import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { pathKeys } from "~shared/lib/react-router";
import { Link } from "react-router-dom";

export const StartupSlide = ({bg, date, person, startupProject}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="max-w-full h-[720px] bg-no-repeat bg-cover p-8 text-white bg-dove rounded-2xl"
    >
      <div className="flex gap-2 mb-96">
        <span className="flex items-center gap-3 text-black py-[10px] px-5 bg-[#F4F4F5] rounded-xl">
          {date?.icon}
          <Typography variant="caption" className="font-normal">
            {date?.title}
          </Typography>
        </span>
        <div className="flex items-center gap-3 text-black justify-between py-[10px] px-5 bg-[#F4F4F5] rounded-xl">
          {person?.icon}
          <Typography variant="caption" className="font-normal">
            {person?.title}
          </Typography>
        </div>
      </div>
      <div className="bottom-[36px] w-full">
        <div className="flex gap-2">
          {startupProject?.icon}
          <Typography variant="h3" className="mb-6 text-4xl">
            {startupProject.title}
          </Typography>
        </div>
        <Typography className="w-[520px] mb-6">
          {startupProject.description}
        </Typography>
        <div className="flex justify-between items-center">
          <Link
            to={pathKeys.error()}
            className="flex items-center gap-1 cursor-pointer hover:bg-[#0D9488] hover:text-white text-black py-[10px] px-5 bg-[#F4F4F5] rounded-xl"
          >
            <Typography variant="caption">Посетить сайт</Typography>
            <ArrowOutwardOutlinedIcon />
          </Link>
          <Link
            to={pathKeys.error()}
            className="flex items-center gap-1 cursor-pointer hover:bg-[#0D9488] hover:text-white text-black py-[10px] px-5 bg-[#F4F4F5] rounded-xl"
          >
            <Typography variant="caption">Подробнее</Typography>
            <KeyboardArrowRightOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
