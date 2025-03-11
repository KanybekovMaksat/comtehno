import React from 'react'
import { Box, Container } from '@mui/material'
import { EventCard } from '~entities/event'
import { useGetEvents } from '~entities/event/event.queries'
// import { EventData } from "~entities/eventSwiperCard";
// import { EventCard } from "~entities/eventCard";

export const EventCards: React.FC = () => {
  const { data: eventData, isLoading, isError } = useGetEvents()

  if (isLoading) {
    return <div>Загрузка</div>
  }
  if (isError) {
    return <div>Ошибка</div>
  }
  return (
    <Box className="pt-[80px] pb-[152px]">
      <Container className="max-w-[1440px]">
        <Box className="flex-wrap flex gap-x-[24px] justify-center r-xl:justify-around ">
          {eventData.data.map((event) => (
            <Box key={event.id}>
              <EventCard key={event.id} event={event} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
