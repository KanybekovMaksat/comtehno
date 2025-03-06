import React from "react";
import { UpComing } from "../ui/upcoming.ui";

interface Event {
  id: number;
  image: string;
  date: string;
  category: string;
  name: string;
  slug: string;
}

export const UpComingData: React.FC = () => {
  const dataUpComing: Event[] = [
    {
      slug: "new-year",
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRG94baP7Te4yVwWpicSAMvz46oIHYHzLo-w&s",
      date: "2026-01-01",
      category: "new years",
      name: "Новогоднее чудо в КОМТЕХНО",
    },
  ];

  return (
    <div>
        {
            <UpComing data={dataUpComing}/>
        }    
    </div>
  );
};
