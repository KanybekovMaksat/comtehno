import React from "react";
import { Box, Container, } from "@mui/material";
import { EventData } from "~entities/eventSwiperCard";
import { EventCard } from "~entities/eventCard";

export const EventCards: React.FC = () => {
  return (
    <Box className="pt-[80px] pb-[152px]">
      <Container className="max-w-[1440px]">
        <Box className="flex-wrap flex gap-x-[24px] justify-center r-xl:justify-around ">
          {EventData.map((event) => (
            <Box key={event.id}>
              <EventCard key={event.id} event={event} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
