import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
  Tabs,
  Tab,
  Menu,
  MenuItem,
} from "@mui/material";

export function ReviewsSection() {
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const reviews = [
    {
      name: "Абдрашитов Бек",
      course: "Студент 3 курса",
      specialization: "Frontend-разработчик",
      avatar:
        "https://www.fastweb.com/uploads/article_photo/photo/2036641/10-ways-to-be-a-better-student.jpeg",
      steps1: "Первые шаги и ожидания",
      content1: `
        Когда я поступил в колледж, мне было немного страшно,
        но одновременно интересно. Хотелось научиться чему-то новому
        и встретить людей с похожими интересами. Программа сразу показалась насыщенной,
        и я ожидал, что учеба будет трудной, но интересной.
      `,
      steps2: "Что нового узнали и чему научились",
      content2: `
        На втором курсе я уже более осознанно погрузился в свою специальность. 
        Поначалу было нелегко, но поддержка преподавателей помогла мне лучше понять материал.
      `,
      steps3: "Какие планы после окончания?",
      plans: `
        На третьем курсе я уже начинаю чувствовать себя профессионалом.
        Применяю полученные знания на практике и участвую в интересных проектах.
      `,
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <Typography variant="h4" className="text-center mb-6 font-bold">
          Свыше <span className="text-green-500">1700 студентов</span> и{" "}
          <span className="text-green-500">50 000 выпускников</span>
        </Typography>

        <div className="flex justify-center items-baseline mb-6">
            <div className="flex justify-center mb-4">
          <Button
            variant="outlined"
            size="small"
            onClick={handleMenuOpen}
            className="rounded-full text-gray-700"
          >
            Frontend разработчик ⭣
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Frontend разработчик</MenuItem>
            <MenuItem onClick={handleMenuClose}>Backend разработчик</MenuItem>
          </Menu>
            </div>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Filter Tabs"
          >
            <Tab label="Студенты" />
            <Tab label="Выпускники" />
          </Tabs>

        </div>



        {/* Swiper */}
        <Swiper spaceBetween={16} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 } }}>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="shadow-lg rounded-2xl w-[100vw] h-[50vh]">
                <CardContent className="flex w-full justify-evenly items-start">
                  <div className="flex items-center mb-4">
                    <Avatar src={review.avatar} alt={review.name} className="mr-4 w-16 h-16" />
                    <div>
                      <Typography variant="h6">{review.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {review.course}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        className="mt-4 text-green-500 border-green-500"
                        >
                            {review.specialization}
                        </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[5rem]">
                        <Typography variant="subtitle1" className="text-lg font-semibold mb-4">
                                {review.steps1}
                            </Typography>
                            <Typography variant="subtitle1" className="text-lg font-semibold mb-4">
                                {review.steps2}
                            </Typography>
                            <Typography variant="subtitle1" className="text-lg font-semibold mb-4">
                                {review.steps3}
                            </Typography>
                  </div>

                    <div className="flex flex-col w-[30vw] gap-[1rem]">

                        <Typography variant="body2" className="mb-4">
                            {review.content1}
                        </Typography>
                        <Typography
                            variant="body2"
                            className="text-gray-700 italic mb-10"
                        >
                            {review.content2}
                        </Typography>
                        <Typography
                            variant="body2"
                            className="font-medium text-gray-900"
                        >
                            {review.plans}
                        </Typography>

                    </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
