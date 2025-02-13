import { Typography, useMediaQuery, useTheme } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import { EventData } from '~entities/eventSwiperCard'

export const HeroCarousel: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <div className="w-full overflow-hidden">
      <Marquee direction="left" speed={100} className="mb-3 overflow-x-none">
        <div className="flex items-center r-sm:gap-3 r-sm:ml-3 gap-4 ml-4">
          {EventData.map((carusel) => (
            <div key={carusel.id}>
              {!isMobile ? (
                <div className="flex items-center justify-between backdrop-blur-xl bg-white/30 p-2 rounded-lg w-[400px] h-[100px] text-white">
                  <div>
                  <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "220px" }} variant="h3" 
                    className="mb-2 text-lg font-normal" >
                    {carusel.title}
                  </Typography>
                  <Link to={`/event/${carusel.slug}`} className="bg-primary inline-flex items-center text-white text-sm px-3 py-1 rounded transition" >
                    Перейти
                  </Link>
                  </div>
                  <img src={carusel.photo} alt='photo' className='rounded-lg w-36 h-[82px] bg-black' />
                </div>
              ) : (
                <div className='flex gap-4'>
                  <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "220px" }} variant="h3" 
                    className="mb-2 r-sm:text-base backdrop-blur-xl bg-white/30 px-2 py-1 rounded-md  text-white text-lg font-normal" >
                    {carusel.title}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}
