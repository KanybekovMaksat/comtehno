import React from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { EventCard } from "~entities/event";
import { useGetEvents } from "~entities/event/event.queries";

export const EventCards: React.FC = () => {
  const { data: eventData, isLoading, isError } = useGetEvents();

  if (isError)
    return (
      <Typography variant="h2" className="text-center">
        Error 404!
      </Typography>
    );

  if (isLoading)
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );

  if (!eventData)
    return (
      <div className="m-auto">
        <CircularProgress />
      </div>
    );

  return (
    <Box className="pt-[80px] pb-[152px]">
      <Container className="max-w-[1440px]">
        <Box className="flex-wrap flex gap-x-[24px] justify-start r-xl:justify-around ">
          {eventData.data.map((event) => (
            <Box key={event.id}>
              <EventCard key={event.id} event={event} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
