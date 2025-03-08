import { Link } from 'react-router-dom';

// Таблица транслитерации русского текста в латиницу
const transliterationMap: { [key: string]: string } = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z',
  и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r',
  с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch',
  ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya'
};

// Функция для транслитерации
const transliterate = (text: string) =>
  text
    .toLowerCase()
    .split('')
    .map((char) => transliterationMap[char] || char) // Заменяем буквы по таблице
    .join('')
    .replace(/\s+/g, '-') // Пробелы заменяем на дефисы
    .replace(/[^a-z0-9-]/g, ''); // Убираем лишние символы

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

// Разбиваем список на 2 колонки
const chunkArray = (arr: string[], chunkSize: number) =>
  Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

const SpecialtiesSection: React.FC = () => {
  const columns = chunkArray(specialties, Math.ceil(specialties.length / 2));

  return (
    <div className="block">
      <h2 className="mb-[16px] text-[17px] md:text-[19px] font-[700] leading-[23.75px] text-[#18181B]">
        Специальности
      </h2>
      <div className="flex gap-[24px]">
        {columns.map((column, colIndex) => (
          <ol key={colIndex} className="list-none flex flex-col gap-[16px] mb-[24px]">
            {column.map((specialty) => {
              const formattedURL = `/speciality/${transliterate(specialty)}/`;

              return (
                <li key={specialty} className="text-[15px] md:text-[16px] font-[600] text-[#52525B]">
                  <Link to={formattedURL} className="hover:underline hover:text-[#18181B] transition">
                    {specialty}
                  </Link>
                </li>
              );
            })}
          </ol>
        ))}
      </div>
    </div>
  );
};

export default SpecialtiesSection;
