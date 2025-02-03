import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

interface AccordionItem {
  id: number;
  title: string;
  items: string[];
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'Колледж',
    items: ['О нас', 'Новости', 'Мероприятия', 'Отзывы'],
  },
  {
    id: 2,
    title: 'Полезные ссылки',
    items: ['Makalabox', 'Профориентация', 'Расписание', 'Библиотека'],
  },
  {
    id: 3,
    title: 'Специальности',
    items: [
      'Frontend разработчик',
      'Backend разработчик',
      'Графический дизайнер',
      'Интерьерный дизайнер',
      'Продукт менеджер',
      'Системный аналитик',
      'Системный администратор',
      'Бизнес аналитик',
      'Бухгалтер',
      'Эксперт в банковском деле',
    ],
  },
];

// Функция для преобразования названия в URL-friendly формат
const formatTitleForURL = (title: string) => encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));

const AccordionUsage: React.FC = () => {
  return (
    <div className="sm:hidden block">
      {accordionData.map(({ id, title, items }) => (
        <Accordion
          key={id}
          disableGutters
          sx={{ boxShadow: 0, backgroundColor: '#FAFAFA', position: 'unset', '&:hover': { boxShadow: 0 } }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
            <Typography component="span">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol className="list-none flex flex-col gap-[16px] mb-[24px]">
              {items.map((item, index) => (
                <li key={`${id}-${index}`} className="text-[15px] md:text-[16px] font-[400] leading-[20px] text-[#52525B]">
                  <Link to={`/${formatTitleForURL(item)}`} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ol>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionUsage;
