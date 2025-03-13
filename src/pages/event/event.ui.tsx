import React from "react";
import { EventsSection } from "~widgets/eventSwiper/eventSwiperSection.ui";
import { EventCards } from "~widgets/eventCards";
import { useMediaQuery } from "@mui/material";

export const EventPage: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 704px)");

  return (
    <div>
      <EventsSection />
      {!isSmallScreen && <EventCards />}
    </div>
  );
};
