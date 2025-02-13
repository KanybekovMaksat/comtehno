import { Typography, Box } from "@mui/material";
import calendar from "~widgets/eventSwiper/assets/icon/calendar.png";
import location from "~widgets/eventSwiper/assets/icon/location.png";
import { Event } from "~entities/eventSwiperCard";
import { BackButton } from "~shared/ui/back";

export const EventDetails: React.FC<{ event: Event }> = ({ event }) => {
  return (
<<<<<<< Updated upstream
    <Box className="relative  w-full ">
      <BackButton></BackButton>
=======
    <Box className="relative container  w-full ">
      <BackButton/>

>>>>>>> Stashed changes
      <Box className="flex items-center gap-x-[8px] ">
        <Typography
          className="text-[#52525B] font-normal text-base"
          variant="h5"
        >
          {event.date}
        </Typography>
        <Typography
          className={`uppercase font-normal text-base ${
            event.colorCategory || "text-black"
          }`}
          variant="h5"
        >
          {event.category}
        </Typography>
      </Box>

      <Typography
        variant="h3"
        className="font-light text-[44px] text-[#18181B] pt-[16px] pb-[24px] r-md:text-3xl"
      >
        {event.title}
      </Typography>

      <img
        src={event.photo}
        alt={event.title}
        style={{ borderRadius: 16, objectFit: "cover" }}
        className="w-full h-[467px] lg:w-full r-sm:h-[224px]"
      />

      <Box className="flex items-center gap-x-[16px] my-5 w-full  r-sm:grid r-sm:gap-4">
        <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
          <img className="w-[24px] h-[24px]" src={calendar} alt="" />
          {event.date}
        </span>
        <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
          <img src={location} alt="" /> {event.location}
        </span>
      </Box>

      <Box
        sx={{
          whiteSpace: "pre-line",
          lineHeight: 1.6,
          "& ul": { pl: 3, mb: 2 },
          "& li": { mb: 1 },
        }}
        className="font-light text-[20px]"
      >
        <Typography className="font-light text-[20px]" variant="body2">
          {event.description}
        </Typography>
        <Typography
          className="font-light text-[20px] py-[30px]"
          variant="body2"
        >
          {event.description1}
        </Typography>
        <Typography className="font-light text-[20px]" variant="body2">
          {event.description2}
        </Typography>
        <Typography
          className="font-light text-[20px] py-[30px]"
          variant="body2"
        >
          {event.description3}
        </Typography>
        <Typography className="font-light text-[20px]" variant="body2">
          {event.description4}
        </Typography>
        <Typography className="font-light text-[20px]" variant="body2">
          {event.description5}
        </Typography>
      </Box>
    </Box>
  );
};
