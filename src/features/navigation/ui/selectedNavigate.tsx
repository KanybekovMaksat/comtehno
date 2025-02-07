import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

import CodeOffIcon from '@mui/icons-material/CodeOff';

export const SelectedNavigate: React.FC = (titleSelected: string) => {  
  interface SpecialDate {
    icon: JSX.Element;
    direction: string;
    title: string;
    body: string;
  }

  const specialDateList: SpecialDate[] = [
    {
      icon: <CodeOffIcon />,
      direction: "Программирование",
      title: "Frontend разработчик",
      body: "Техник-программист"
    },
    {
      icon: <CodeOffIcon />,
      direction: "Программирование",
      title: "Frontend разработчик",
      body: "Техник-программист"
    }
  ];

  return (
    <Accordion className='relative'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Колледж</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex p-6 rounded-2xl bg-white z-10 gap-6 absolute left-0'>
        {specialDateList.map((special: SpecialDate, index: number) => (
          <Box className="w-80" key={index}>
            <div className='flex gap-1 mb-[18px]'>
              {special.icon}
              <Typography className='text-[#0F766E]'>{special.direction}</Typography>
            </div>
            <Typography variant='h3' className='mb-2 font-medium text-2xl'>{special.title}</Typography>
            <Typography className='text-[#52525B]'>{special.body}</Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
