import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material'
import { Fancybox } from '~widgets/fancyapps'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const data = [
  {
    title: '1 Курс',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR9D0-cXonQeHW5L8awtWWgXE6VNVuwa6nOYqFjPz0e6hZ8BcV4s2P7gu7WElG5uKIJFdqFXEdYRPD-/pubhtml',
  },
  {
    title: '2 Курс',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnpkvQGvKGiGg4zG09vMevmpeaqRIVF0o9AvmFZg-eZgRkjlxjPJlc__clUB4LnryXRctBsNQ2sWqa/pubhtml',
  },
  {
    title: '3 Курс',
    url: '',
  },
]

export const TimetablePage = () => {
  return (
    <section>
      <div className="container">
        <Typography variant="h2" className="uppercase">
          Расписание Колледжа
        </Typography>
        <div className="flex flex-col items-start gap-10 mt-10">
          {data.map((data) => (
            <Button className="bg-primary py-5 px-80" variant="contained">
              <a href={data.url} target="_blank">
                {data.title}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
