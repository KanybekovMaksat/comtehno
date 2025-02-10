import { Card, Typography, Button, Box } from "@mui/material";
import calendar from "~widgets/eventSwiper/assets/icon/calendar.png";
import location from "~widgets/eventSwiper/assets/icon/location.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import { Event } from "./event.data";

export const EventCardSwiper: React.FC<{ event: Event }> = ({ event }) => {
  const navigate = useNavigate();
  return (
    <Card className="relative overflow-hidden rounded-lg ">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[535px]  object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <Box className="pl-[24px] ">
        <Box className="flex items-center justify-between absolute top-6 left-0 right-0 px-[24px]">
          <Typography
            variant="h6"
            className="font-bold max-w-[624px] text-[32px] text-[#FAFAFA]  r-xl:text-[24px]"
          >
            {event.title}
          </Typography>
          <Typography
            variant="h6"
            className={`px-4 py-2 rounded-lg text-white font-normal text-[16px] uppercase ${
              event.bgCategory || "bg-gray-400 text-white"
            }`}
          >
            {event.category}
          </Typography>
        </Box>

        <Box className="flex items-center justify-between absolute bottom-6 left-0 right-0 px-[24px]">
          <Box className="flex items-center gap-x-[16px]">
            <span className="bg-[#FFFFFFCC] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
              <img className="w-[24px] h-[24px]" src={calendar} alt="" />{" "}
              {event.date}
            </span>
            <span className="bg-[#FFFFFFCC] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
              <img src={location} alt="" /> {event.location}
            </span>
          </Box>
          <Button
            onClick={() => navigate(`/event/${event.slug}`)}
            variant="contained"
            className="bg-[#FFFFFFCC] text-[#18181B] normal-case font-normal text-[16px] rounded-[12px]"
          >
            Подробнее <KeyboardArrowRightIcon />
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
