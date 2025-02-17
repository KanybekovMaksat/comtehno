import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { pathKeys } from '~shared/lib/react-router'

export const Sidebar = ({ data, pathKey, title }) => {
  return (
    <Box className="max-w-[464px] r-xl:hidden">
      <Typography
        variant="h3"
        className="mb-[8px] text-[#52525B] font-light text-[25px]"
      >
        {title}
      </Typography>
      <Box className="flex flex-col gap-[24px] r-lg:flex-row r-lg:flex-wrap">
        {data.map((item, i) => (
          <Link key={i} to={pathKeys[pathKey].bySlug(item.slug)}>
            <Box className="cursor-pointer">
              <Box className="flex  gap-x-[16px] items-start r-lg:flex-col">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="min-w-[220px] max-w-[220px] h-[122px] rounded-[8px] object-cover shrink-0"
                />
                <Box className="flex flex-col gap-[8px]">
                  <Typography
                    variant="body2"
                    className="font-normal text-base text-[#52525B]"
                  >
                    {item.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-normal text-xl text-[#18181B] line-clamp-3"
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  )
}
