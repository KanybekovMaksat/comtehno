import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Event } from '../event.types'
import { formatDate } from '~shared/lib'

export const EventCard: React.FC = ({ event }: Event) => {
  const navigate = useNavigate()
  return (
    <Box
      className="pb-[48px] max-w-[448px] r-sm:max-w-[400px] cursor-pointer group transition-all duration-300 hover:-translate-y-2"
      onClick={() => navigate(`/event/${event.slug}`)}
    >
      <img
        src={event.photo}
        alt={event.title}
        className="w-[464px] h-[261px] rounded-[12px] object-cover r-sm:w-full r-sm:max-h-[224px] aspect-[16/9]  "
      />
      <Box className="flex items-center gap-x-[8px] pt-[16px]">
        <Typography
          className="text-[#52525B] font-normal text-base"
          variant="h5"
        >
          {formatDate(event.createdAt)}
        </Typography>
        <Typography
          className={`uppercase font-normal text-base  `}
          variant="h5"
        >
          {event.category.name}
        </Typography>
      </Box>
      <Typography
        className="text-[#18181B] font-normal text-[22px] pt-[8px] "
        variant="h4"
      >
        {event.title}
      </Typography>
    </Box>
  )
}
