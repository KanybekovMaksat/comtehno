import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import MenuIcon from "@mui/icons-material/Menu";

interface linkItem {
  title: string;
  url: string;
}

export const Navigate: React.FC = () => {
  const listLink: linkItem[] = [
    { title: "Приёмная комиссия 2025", url: "/error" },
    { title: "О колледже", url: "/about" },
    { title: "Специальности", url: "/speciality" },
    { title: "Абитуриентам", url: "/error" },
    { title: "Новости", url: "/news" },
    { title: "Мероприятия", url: "/event" },
    { title: "Подобрать программу", url: "/error" },
    { title: "Расписание", url: "/error" },
    { title: "Студентам", url: "/error" },
    { title: "Отзывы", url: "/error" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState<boolean>(false);

  // Функция управления Drawer
  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <AppBar position="static" className="bg-white shadow-none">
      <Toolbar className="flex items-center justify-between px-0 py-2">
        <Stack
          sx={{ justifyContent: isMobile && "space-between" }}
          direction="row"
          flexWrap="wrap"
          className="gap-2 items-center w-full"
        >
          <Link
            to={pathKeys.home()}
            className="font-[Geologica] text-[#0F766E] font-bold text-2xl"
          >
            КОМТЕХНО
          </Link>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon className="text-black" />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <List className="w-64">
                  {listLink.map((item, index) => (
                    <ListItem button key={index} onClick={toggleDrawer(false)}>
                      <Link
                        to={item.url}
                        className="text-black w-full block p-2"
                      >
                        <ListItemText primary={item.title} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            listLink.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="font-[Geologica] hover:bg-[#0D9488] hover:text-white transition-all border-[#E4E4E7] text-base text-black font-light border p-2 rounded-full"
              >
                {item.title}
              </Link>
            ))
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
