import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SelectedNavigate } from "./selectedNavigate";

export const Navigate: React.FC = () => {
  interface LinkItem {
    title: string;
    url: string;
  }

  const listLink: LinkItem[] = [
    {
      title: "Новости",
      url: "/news"
    },
    {
      title: "Мероприятия",
      url: "/error"
    },
    {
      title: "Профориентация",
      url: "/error"
    },
    {
      title: "Расписание",
      url: "/error"
    }
  ];

  return <AppBar position="static" className="bg-white shadow-none font-medium px-6 md:px-20 ">
    <Toolbar className="flex items-center justify-between">
      <Typography fontSize={22} className="text-[#0F766E] font-bold" variant="subtitle1">КОМТЕХНО</Typography>
      <div className="flex items-center gap-4">
        <SelectedNavigate titleSelected="Колледж" />
        {listLink.map((item: LinkItem, index: number) => (
          <Link to={item.url} key={index} className="text-[#0F766E] font-light">{item.title}</Link>
        ))}
      </div>
    </Toolbar>
  </AppBar>;
};