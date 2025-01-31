import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

export function DashboardPage() {
  const slides = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/736x/10/f8/14/10f81413b3ea7e86c19b604bacfe1184.jpg',
      title: 'Чехлы для iPhone',
      description: 'Стильные и защитные чехлы для вашего телефона.',
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/736x/8f/c2/33/8fc233a0a643da38ac421038f3b49359.jpg',
      title: 'Чехлы для Samsung',
      description: 'Лучшие решения для защиты вашего устройства.',
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/736x/e6/f8/96/e6f896b726a7fe83a306673b2c5c4a18.jpg',
      title: 'Аксессуары',
      description: 'Кабели, зарядки и многое другое.',
    },
  ];

  return (
    <div className="my-10 flex justify-center items-center flex-col gap-6">
      <div className="slider-banner w-full max-w-7xl px-4">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          pagination={{ clickable: true }}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-[20rem] md:h-[16rem] sm:h-[12rem]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white px-4 text-center">
                  <h2 className="text-2xl md:text-xl sm:text-lg font-bold mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-sm sm:text-xs">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
