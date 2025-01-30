import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";

export const Navigate: React.FC = () => {
  interface LinkItem {
    title: string;
    url: string;
  }

  const listLink: LinkItem[] = [
    {
      title: "Приёмная комиссия 2025",
      url: "/error"
    },
    {
      title: "О колледже",
      url: "/error"
    },
    {
      title: "Специальности",
      url: "/error"
    },
    {
      title: "Абитуриентам",
      url: "/error"
    },
    {
      title: "Новости",
      url: "/news"
    },
    {
      title: "Мероприятия",
      url: "/error"
    },
    {
      title: "Подобрать программу",
      url: "/error"
    },
    {
      title: "Расписание",
      url: "/error"
    },
    {
      title: "Студентам",
      url: "/error"
    },
    {
      title: "Отзывы",
      url: "/error"
    },
  ];

  return <AppBar position="static" className="bg-white shadow-none">
    <Toolbar className="flex items-center justify-between px-0 py-2">
      <Stack direction={"row"} flexWrap={"wrap"}
        className="gap-2 items-center">
        <Link to={pathKeys.home()} className="font-[Geologica] text-[#0F766E] font-bold text-2xl">КОМТЕХНО</Link>
        {listLink.map((item: LinkItem, index: number) => (
          <Link 
            to={item.url}
            key={index} 
            className="font-[Geologica] hover:bg-[#0D9488] hover:text-white transition-all border-[#E4E4E7] text-base text-black font-light border p-2 rounded-full">
              {item.title}
          </Link>
        ))}
      </Stack>
    </Toolbar>
  </AppBar>;
};