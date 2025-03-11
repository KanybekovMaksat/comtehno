import { Typography, Box } from '@mui/material'
import calendar from '~widgets/eventSwiper/assets/icon/calendar.png'
import location from '~widgets/eventSwiper/assets/icon/location.png'
import { Event } from '../event.types'

export const EventDetails: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Box className="relative r-sm:max-w-[380px]">
      <Box className="flex items-center gap-x-[8px] ">
        <Typography
          className="text-[#52525B] font-normal text-base"
          variant="h5"
        >
          {event.createdAt}
        </Typography>
        <Typography className={`uppercase font-normal text-base `} variant="h5">
          {event.category.name}
        </Typography>
      </Box>

      <Typography
        variant="h3"
        className="font-light text-[44px] text-[#18181B] pt-[16px] pb-[24px] r-md:text-3xl"
      >
        {event.title}
      </Typography>

      <img
        src={event.photo}
        alt={event.title}
        style={{ borderRadius: 16, objectFit: 'cover' }}
        className="w-full h-[467px] mb-4 r-sm:w-[340px] r-sm:h-[224px]"
      />

      <Box className="flex items-center mb-4 r-sm:gap-x-2 gap-x-[16px] r-md:w-80 r-sm:grid r-sm:gap-4">
        <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
          <img className="w-[24px] h-[24px]" src={calendar} alt="" />
          {event.createdAt}
        </span>
        <span className="bg-[#F4F4F5] text-[#18181B] flex items-center gap-x-[4px] px-[16px] py-[8px] rounded-[12px] font-normal text-[16px]">
          <img src={location} alt="" /> {event.place}
        </span>
      </Box>

      <Box
        sx={{
          whiteSpace: 'pre-line',
          lineHeight: 1.6,
          '& ul': { pl: 3, mb: 2 },
          '& li': { mb: 1 },
        }}
        className="font-light text-[20px] r-sm:w-[340px]"
      >
        <div
          className="font-light text-[20px]"
          dangerouslySetInnerHTML={{ __html: event.content }}
        ></div>
      </Box>
    </Box>
  )
}
