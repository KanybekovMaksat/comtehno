import { Box, Typography } from '@mui/material'
import { CalendarMonth, ArrowForwardIos } from '@mui/icons-material'
import bg from './assets/img/newsBg.png'

export const NewsList = () => {
  return (
    <section>
      <div className="container">
        <Typography variant="h2">Новости</Typography>
        <Box>
          <Box
            sx={{ backgroundImage: `url(${bg})` }}
            className="w-[952px] h-[456px] bg-cover rounded-[16px] flex justify-between items-end p-[24px]"
          >
            <div className="bg-white w-[196px] h-[40px] flex items-center rounded-[12px] justify-center">
              <CalendarMonth></CalendarMonth>
              <span>30 октября 2024</span>
            </div>
            <div className="bg-white w-[196px] h-[40px] flex items-center rounded-[12px] justify-center">
              <span>Подробнее</span>
              <ArrowForwardIos className="w-[15px] "></ArrowForwardIos>
            </div>
          </Box>
          
        </Box>
      </div>
    </section>
  )
}
