import React from "react";
import { EventsSection } from "~widgets/eventSwiper/eventSwiperSection.ui";  
import { EventCards } from "~widgets/eventCards";  
import { useMediaQuery } from "@mui/material";
import { ScrollTop } from "~shared/lib/react-router/scroll-top";
export const EventPage: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 704px)");

  return (
    <div>
      <ScrollTop/>
      <EventsSection />
      {!isSmallScreen && <EventCards />}
    </div>
  );
};
