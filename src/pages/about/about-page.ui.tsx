import { Typography } from '@mui/material';
import { Title } from '~shared/ui/title';

export function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 mb-20 to-white p-6">
      <div className="max-w-4xl text-center">
        <Title>О нас</Title>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Добро пожаловать в Bilim Track — образовательную платформу, которая
          делает обучение интересным, интерактивным и современным. Мы стремимся
          к тому, чтобы каждый мог достичь своих образовательных целей.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4  border border-alto rounded-lg bg-white">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Наша миссия
            </h2>
            <p className="text-gray-600">
              Наша цель — сделать обучение увлекательным и доступным для всех,
              используя инновационные технологии.
            </p>
          </div>
          <div className="p-4 border border-alto rounded-lg bg-white">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Наши ценности
            </h2>
            <p className="text-gray-600">
              Мы верим в силу образования, креативности и постоянного прогресса,
              чтобы помочь каждому раскрыть свой потенциал.
            </p>
          </div>
        </div>
        <Typography
          variant="body2"
          className="text-gray-400 text-center mt-4 italic text-lg flex flex-col items-center justify-center gap-3"
        >
          Разработку платформы осуществляют программисты из команды:{' '}
          <span className="p-2 not-italic border border-alto text-[#156dd1] font-bold flex items-center gap-3 rounded">
            OurEra Soft
            <img
              src="/logo.png"
              className="w-[30px] h-[30px] rounded-full"
              alt=""
            />
          </span>
        </Typography>
      </div>
    </div>
  );
}
