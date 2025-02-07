import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { formatDate } from '../date'
import { pathKeys } from '~shared/lib/react-router'

export const Sidebar = ({ data, title, pathKey }) => {
  return (
    <Box>
      <Typography variant="h3" className="mb-[8px]">
        {title}
      </Typography>
      <Box className="flex flex-col gap-[24px]">
        {data.map((item) => (
          <Link key={item.slug} to={pathKeys[pathKey].bySlug(item.slug)}>
            <Box className="flex gap-[16px]">
              <Box
                component={'img'}
                src={item.photo}
                alt={item.title}
                className="w-[220px] rounded-[8px]"
              ></Box>
              <Box>
                <Typography>{formatDate(item.createdAt)}</Typography>
                <Typography>{item.title}</Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  )
}
