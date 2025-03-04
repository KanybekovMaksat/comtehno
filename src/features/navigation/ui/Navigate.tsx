import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { useTranslation } from "react-i18next";
import { getLanguage, setLanguage } from "~shared/lib/i18n";
import MenuIcon from "@mui/icons-material/Menu";

interface linkItem {
  title: string;
  url: string;
}

export const Navigate: React.FC = () => {
  const { t } = useTranslation();

  const listLink: linkItem[] = [
    // { title: "Приёмная комиссия 2025", url: "/error" },
    {
      title: t("homepage.header.headerBottom.navigation.about"),
      url: "/about",
    },
    // { title: "Специальности", url: "/speciality" },
    {
      title: t("homepage.header.headerBottom.navigation.applicants"),
      url: "/reviews",
    },
    {
      title: t("homepage.header.headerBottom.navigation.news"),
      url: "/news",
    },
    {
      title: t("homepage.header.headerBottom.navigation.events"),
      url: "/event",
    },
    // {
    //   title: t("homepage.header.headerBottom.navigation.selectProgram"),
    //   url: "/error",
    // },
    {
      title: t("homepage.header.headerBottom.navigation.schedule"),
      url: "/error",
    },
    {
      title: t("homepage.header.headerBottom.navigation.students"),
      url: "/reviews",
    },
    {
      title: t("homepage.header.headerBottom.navigation.documents"),
      url: "/documents",
    },
    // { title: "Отзывы", url: "/error" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [open, setOpen] = useState<boolean>(false);

  // Функция управления Drawer
  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = getLanguage();
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (lng: string) => {
    setLanguage(lng);
    window.location.reload();
  };

  const languageMap: { [key: string]: string } = {
    en: "English",
    ru: "Русский",
    ky: "Кыргызча",
  };

  const currentLanguage = languageMap[i18n.language] || "Language";

  return (
    <AppBar position="sticky" className="bg-white shadow-none">
      <Toolbar className="flex items-center justify-between px-0 py-2">
        <Stack
          direction="row"
          flexWrap="wrap"
          className="gap-2 items-center w-full flex justify-between"
        >
          <div className="r-lg:w-full r-lg:justify-between flex gap-2 items-center">
            <Link
              to={pathKeys.home()}
              className="font-[Geologica] text-[#0F766E] font-bold text-2xl"
            >
              {t("homepage.header.headerBottom.logo")}
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
                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
                  <List className="w-64">
                    {listLink.map((item, index) => (
                      <ListItem key={index} onClick={toggleDrawer(false)}>
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
              <div className="flex gap-2 flex-wrap items-center max-w-[1080px]">
                {listLink.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="font-[Geologica] hover:bg-primary hover:text-white transition-all border-[#E4E4E7] text-base text-black font-light border p-2 rounded-full"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Интернационализация */}
          <div className="relative r-lg:hidden justify-self-end">
            <button
              className="text-[black] text-md font-medium hover:text-gray-400 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {/* <LanguageIcon className="mr-2" /> */}
              <Typography className="font-normal">{currentLanguage}</Typography>
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg z-50">
                <ul className="py-2">
                  {Object.entries(languageMap).map(([key, label]) => (
                    <li key={key}>
                      <button
                        className="text-black text-sm block px-4 py-2 hover:bg-primary hover:text-white w-full text-left"
                        onClick={() => handleLanguageChange(key)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
