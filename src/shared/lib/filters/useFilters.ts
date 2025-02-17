import { useState } from "react";

export const useFilters = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { title: "Все", category: "all" },
    { title: "Frontend разработчик", category: "Frontend разработчик" },
    { title: "Backend разработчик", category: "Backend разработчик" },
    { title: "Графический дизайнер", category: "Графический дизайнер" },
  ];

  const data = [
    {
      image:
        "https://www.fastweb.com/uploads/article_photo/photo/2036641/10-ways-to-be-a-better-student.jpeg",
      date: "26 января 2025",
      category: "Frontend разработчик",
      title: "Абдрашитов Бек",
      slug: "abdrashitov-bek",
    },
    {
      image:
        "https://studyportals.com/app/uploads/2024/11/shutterstock_2345710757-640x384.jpg",
      date: "1 января 2025",
      category: "Backend разработчик",
      title: "Туратбекова Бегимай",
      slug: "turatbekova-begimai",
    },
    {
      image:
        "https://study.gov.pl/sites/default/files/styles/news/public/field/image/news/adobestock_165061057_autor_antonioguillem_1.jpeg?itok=xFmtva__",
      date: "12 декабря 2024",
      category: "Backend разработчик",
      title: "Бекболотова Раяна",
      slug: "Bekbolotova Rayana",
    },
    {
      image:
        "https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1",
      date: "9 ноября 2024",
      category: "Frontend разработчик",
      title: "Хохулин Илья",
      slug: "khokhulin-ilya",
    },
    {
      image:
        "https://www.malvernbh.com/wp-content/uploads/2023/02/shutterstock_1079701271-1-min-1010x673.jpg",
      date: "13 октября",
      category: "Frontend разработчик",
      title: "Замирбек уулу Рахим",
      slug: "zamirbek-uulu-rahim",
    },
    {
      image:
        "https://opis-cdn.tinkoffjournal.ru/mercury/in-student-situations.tmmnovfwyaqx..jpg",
      date: "24 августа 2024",
      category: "Графический дизайнер",
      title: "Таалайбек уулу Байэли",
      slug: "taalaibek-uulu-bayeli",
    },
  ];

  const filteredList = data.filter((student) => {
    const matchesFilter =
      activeFilter === "all" || student.category === activeFilter;
    return matchesFilter;
  });

  return {
    setActiveFilter,
    activeFilter,
    filteredList,
    filters,
  };
};
