import React, { useEffect } from "react";
import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { HistoryCard } from "~entities/historyCard/historyCard";
import { AboutHistoryCard } from "~entities/aboutHistoryCard/aboutHistoryCard";
import { AboutHistoryCardCollege } from "~entities/aboutHistoryCard/aboutHistoryCardRecktorat";

export const AboutHistory: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <Container className="max-w-[1440px]">
      <div className="pt-[80px] pb-[80px] flex gap-[21px] flex-col ">
        <AboutHistoryCardCollege />
        <AboutHistoryCard />
        <HistoryCard />
      </div>
    </Container>
  );
};
