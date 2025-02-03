import { Link } from 'react-router-dom';

const specialties = [
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
];

// Функция для безопасного форматирования URL
const formatTitleForURL = (title: string) => encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));

// Разбиваем список специальностей на две колонки
const chunkArray = (arr: string[], chunkSize: number) => {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
};

const SpecialtiesSection: React.FC = () => {
  const columns = chunkArray(specialties, Math.ceil(specialties.length / 2));

  return (
    <div className="sm:block hidden">
      <h2 className="mb-[16px] text-[15px] md:text-[19px] font-[400] leading-[23.75px] text-[#18181B]">
        Специальности
      </h2>
      <div className="flex gap-[24px]">
        {columns.map((column, colIndex) => (
          <ol key={colIndex} className="list-none flex flex-col gap-[16px] mb-[24px]">
            {column.map((specialty) => (
              <li key={specialty} className="text-[15px] md:text-[16px] text-[#52525B]">
                <Link to={`/specialties/${formatTitleForURL(specialty)}`} className="hover:underline">
                  {specialty}
                </Link>
              </li>
            ))}
          </ol>
        ))}
      </div>
    </div>
  );
};

export default SpecialtiesSection;
