import { Outlet } from "react-router-dom";
import { ScrollTop } from "~shared/lib/react-router";
import { Footer } from "~widgets/footer";
import { Header } from "~widgets/header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import { FeatBack } from "~features/featback";
import { Tab } from "~widgets/tab";

export function GenericLayout() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // Когда появится кнопка (100px вниз)
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Tab />
      <ScrollTop />
      <Header />
      <Outlet />
      <Zoom in={trigger}>
        <Fab
          color="default"
          size="large"
          onClick={handleClick}
          sx={{ position: "fixed", bottom: 90, right: 20 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
      <FeatBack />
      <Footer />
    </div>
  );
}

export function IntroLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
