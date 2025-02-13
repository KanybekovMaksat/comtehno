import React from "react";
import { useParams } from "react-router-dom";
import { EventData } from "~entities/eventSwiperCard";
import { Container, Box } from "@mui/material";
import { EventDetails } from "~entities/event-details";
import { ScrollTop } from "~shared/lib/react-router/scroll-top";
<<<<<<< Updated upstream
import { useMediaQuery } from "@mui/material";
import { EventLine } from "~features/eventLine";
import { Sidebar } from "~features/sidebar";
=======
import { Sidebar } from "~features/sidebar";
import { useMediaQuery } from "@mui/material";
>>>>>>> Stashed changes

export const EventDetailsPage: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1350px)");

  const { slug } = useParams<{ slug: string }>();

  const event = EventData.find((e) => e.slug.toString() === slug);

  if (!event) {
    return <div>Событие не найдено</div>;
  }

  return (
    <Container className="max-w-[1440px]">
      <ScrollTop />
<<<<<<< Updated upstream

      <Box className="flex gap-x-[146px] pb-[152px] pt-[40px]">
        <div className="flex flex-col gap-[40px]">
          <EventDetails event={event} />
          <EventLine />
        </div>
        {!isSmallScreen && <Sidebar event={event} />}
=======
      <Box className="flex gap-x-[90px] pb-[152px] ">
        <EventDetails event={event} />
        {!isSmallScreen && (
          <Sidebar data={EventData} pathKey={"event"} title={"Мероприятия"} />
        )}
>>>>>>> Stashed changes
      </Box>
    </Container>
  );
};
