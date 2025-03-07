import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { EventLine } from '~features/eventLine'
import { Sidebar } from '~features/sidebar'
import { BackButton } from '~shared/ui/back'
import { EventDetails } from '~entities/event'
import { useGetEvents, useGetEventsDetail } from '~entities/event/event.queries'

export const EventDetailsPage: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1350px)')

  const { slug } = useParams<{ slug: string }>()
  const {
    data: eventData,
    isLoading: eventLoading,
    isError: eventError,
  } = useGetEventsDetail(slug)
  const { data: eventsListData, isLoading, isError } = useGetEvents()

  // const event = EventData.find((e) => e.slug.toString() === slug)

  if (!event) {
    return <div>Событие не найдено</div>
  }

  return (
    <Container className="max-w-[1440px] relative pt-10">
      <BackButton />
      <Box className="flex gap-x-[146px] mb-[152px]">
        <div className="flex flex-col gap-[40px]">
          <EventDetails event={eventData.data} />
          <EventLine />
        </div>
        {!isSmallScreen && (
          <Sidebar data={eventsListData} pathKey={'event'} title={'События'} />
        )}
      </Box>
    </Container>
  )
}
