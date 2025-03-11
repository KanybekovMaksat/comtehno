import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { EventLine } from '~features/eventLine'
import { Sidebar } from '~features/sidebar'
import { BackButton } from '~shared/ui/back'
import { EventDetails, eventQueries } from '~entities/event'

export const EventDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const {
    data: eventData,
    isLoading: eventLoading,
    isError: eventError,
    isSuccess: eventSucces,
  } = eventQueries.useGetEventsDetail(slug)
  const {
    data: eventsListData,
    isLoading,
    isError,
    isSuccess,
  } = eventQueries.useGetEvents()

  const isSmallScreen = useMediaQuery('(max-width: 1350px)')
  if (eventLoading && isLoading) {
    return <div>Загрузка</div>
  }
  if (eventError && isError) {
    return <div>Ошибка</div>
  }
  if (isSuccess && eventSucces) {
    return (
      <Container className="max-w-[1440px] relative pt-10">
        <BackButton />
        <Box className="flex gap-x-[146px] mb-[152px]">
          <div className="flex flex-col gap-[40px]">
            <EventDetails event={eventData.data} />
            <EventLine />
          </div>
          {!isSmallScreen && (
            <Sidebar
              data={eventsListData.data}
              pathKey={'event'}
              title={'События'}
            />
          )}
        </Box>
      </Container>
    )
  }
}
