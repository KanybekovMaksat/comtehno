import { Container, Typography } from "@mui/material";
import Carusel from "~entities/caruselHero/caruselHero";
import heroBg from "./img/hero-bg.jpeg";

export function Hero() {
  return (
    <section
      className="bg-cover pt-[30px] px-4 md:px-8 lg:px-16 mb-[150px]"
      style={{
        backgroundImage: `url('${heroBg}')`,
      }}
    >
      <Container className="max-w-[1440px]">
        <div>
          <Typography variant="h1" className="mb-16 text-white font-geologica text-6xl font-[600] text-center">
            <span className="text-[#215d0e]">Комтехно</span> - Технологии. Инновации. Качество. Будущее.
          </Typography>
          <div className="flex align-center justify-center">
            <button className="text-[#18181B] font-geologica font-[400] text-center text-[20px] sm:text-[28px] bg-[#FFFFFFCC] sm:w-[400px] w-[300px] sm:h-[59px] h-[50px] rounded-[12px]">
              Начать
            </button>
          </div>
        </div>
        <Carusel />
      </Container>
    </section>
  );
}
