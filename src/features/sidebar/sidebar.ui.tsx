import { Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { pathKeys } from '~shared/lib/react-router'

export const Sidebar = ({ data, pathKey, title }) => {
  const navigate = useNavigate()

  return (
    <Box className="max-w-[464px]">
      <Typography
        variant="h3"
        className="mb-[8px] text-[#52525B] font-light text-[25px]"
      >
        {title}
      </Typography>
      <Box className="flex flex-col gap-[24px]">
        {data.map((item) => (
          <Link key={item.slug} to={pathKeys[pathKey].bySlug(item.slug)}>
            <Box
              key={item.id}
              onClick={() => navigate(`/item/${item.slug}`)}
              className="cursor-pointer"
            >
              <Box className="flex  gap-x-[16px] items-start">
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
