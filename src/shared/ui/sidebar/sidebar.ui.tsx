import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EventData } from "~entities/eventSwiperCard";
import { Event } from "~entities/eventSwiperCard";
export const Sidebar: React.FC<{ event: Event }> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Box className="max-w-[464px]">
      <Typography
        variant="h3"
        className="mb-[8px] text-[#52525B] font-light text-[32px]"
      >
        Новости
      </Typography>
      <Box className="flex flex-col gap-[24px]">
        {EventData.map((event) => (
          <Box
            key={event.id}
            onClick={() => navigate(`/event/${event.slug}`)}
            className="cursor-pointer"
          >
            <Box className="flex  gap-x-[16px] items-start">
              <img
                src={event.image}
                alt={event.title}
                className="min-w-[220px] max-w-[220px] h-[122px] rounded-[8px] object-cover shrink-0"
              />
              <Box className="flex flex-col gap-[8px]">
                <Typography
                  variant="body2"
                  className="font-normal text-base text-[#52525B]"
                >
                  {event.date}
                </Typography>
                <Typography
                  variant="body2"
                  className="font-normal text-xl text-[#18181B] line-clamp-3"
                >
                  {event.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
