import { Stack, Typography } from '@mui/material'
import { SpecialCardProps } from '~entities/speciality/speciality.types'
import { BackButton } from '~shared/ui/back'

export const SpecialHero: React.FC<SpecialCardProps> = ({
  photo,
  title,
  category,
  specialty,
  description,
}) => {
  return (
    <Stack
      className="r-lg:mb-10 mb-16"
      direction={'row'}
      justifyContent={'space-between'}
    >
      <BackButton />
      <div>
        <div className="flex r-sm:gap-2 gap-4 mb-6 items-center">
          <img src={category.photo} alt="img" />
          <Typography
            className="r-sm:text-[14px] text-[#0F766E] text-base"
            variant="caption"
          >
            {category.name}
          </Typography>
          <Typography className="r-sm:text-[14px] text-base" variant="caption">
            {specialty}
          </Typography>
        </div>
        <Typography
          className="r-sm:text-4xl text-[44px] uppercase mb-2"
          variant="h2"
        >
          {title}
        </Typography>
        <Typography
          className="r-sm:text-lg max-w-2xl text-2xl font-light"
          variant="body1"
        >
          {description}
        </Typography>
      </div>
      <img
        className="r-sm:hidden r-lg:max-w-sm r-md:max-w-xs max-w-2xl object-cover"
        src={photo}
        alt=""
      />
    </Stack>
  )
}
