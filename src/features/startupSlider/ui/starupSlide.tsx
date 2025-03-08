import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { pathKeys } from "~shared/lib/react-router";
import { Link } from "react-router-dom";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface Startup {
  date: {
    icon: JSX.Element;
  };
  person: {
    icon: JSX.Element;
  };
}

export const StartupSlide = ({title, description, fullName, photo, websiteUrl, date}) => {

 const startupList: Startup[] = [
  {
    date: {
      icon: <CalendarMonthOutlinedIcon />,
     },
     person: {
       icon: <PersonOutlineOutlinedIcon />,
     },
  }
];



  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{ backgroundImage: `url(${photo})` }}
      className="max-w-full h-[100%] bg-no-repeat bg-cover p-8 text-white bg-dove rounded-2xl"
    >
      <div className="flex gap-2 mb-96">
        <span key={title}  className="flex items-center gap-3 text-black py-[10px] px-5 bg-[#F4F4F5] rounded-xl">
        {startupList.map(el => (
            <div>{el.date.icon}</div>
))}
          <Typography variant="caption" className="font-normal">
            {date}
          </Typography>
        </span>
        <div className="flex items-center gap-3 text-black justify-between py-[10px] px-5 bg-[#F4F4F5] rounded-xl">
          {startupList.map(el => (
            <div>{el.person.icon}</div>
))}
          <Typography variant="caption" className="font-normal">
            {fullName}
          </Typography>
        </div>
      </div>
      <div className="bottom-[36px] w-full">
        <div className="flex gap-2">
          {websiteUrl?.icon}
          <Typography variant="h3" className="mb-6 text-4xl">
            {title}
          </Typography>
        </div>
        <Typography className="w-[520px] mb-6">
          {description}
        </Typography>
        <div className="flex justify-between items-center">
          <a
            href={websiteUrl}
            className="flex items-center gap-1 cursor-pointer hover:bg-[#0D9488] hover:text-white text-black py-[10px] px-5 bg-[#F4F4F5] rounded-xl"
          >
            <Typography variant="caption">Посетить сайт</Typography>
            <ArrowOutwardOutlinedIcon />
          </a>
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
