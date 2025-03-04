import { Outlet } from "react-router-dom";
import { ScrollTop } from "~shared/lib/react-router";
import { Footer } from "~widgets/footer";
import { Header } from "~widgets/header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
  useScrollTrigger,
  Zoom,
} from "@mui/material";
import { useState } from "react";

export function GenericLayout() {
  // const [open, setOpen] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // Когда появится кнопка (100px вниз)
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollTop />
      <div className="h-28 w-full m-0 flex items-center justify-evenly z-10 bg-dove fixed">
        <span className="text-5xl bg-tundora px-6 py-2 rounded-xl text-white">
          Время выбрать себя
        </span>
        <span className="text-xl rotate-6 bg-tundora px-6 py-2 rounded-xl text-white">
          скидка 60%
        </span>
      </div>
      <Header />
      <Outlet />
      <Zoom in={trigger}>
        <Fab
          color="default"
          size="large"
          onClick={handleClick}
          sx={{ position: "fixed", bottom: 24, right: 20 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
      {/* <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Обратная связь</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Ваш отзыв"
            multiline
            rows={4}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отмена</Button>
          <Button variant="contained" color="primary">
            Отправить
          </Button>
        </DialogActions>
      </Dialog> */}
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
