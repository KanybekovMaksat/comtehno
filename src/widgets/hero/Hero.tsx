import { Container, Typography } from "@mui/material";
import Carusel from "~entities/caruselHero/caruselHero";
import heroBg from "./img/hero-bg.jpeg";

export function Hero() {
  return (
    <section
      className="r-sm:mx-2 r-sm:h-[360px] mx-5 bg-cover rounded-3xl py-32 px-4 r-sm:mb-16 mb-[150px]"
      style={{
        backgroundImage: `url('${heroBg}')`,
      }}
    >
      <Container className="max-w-[1440px]">
        <div className="mb-10">
          <Typography variant="h1" className="r-sm:text-2xl mb-16 text-white font-geologica text-6xl font-[600] text-center">
            Комтехно - Технологии. Инновации. Качество. Будущее.
          </Typography>
        </div>
        <Carusel />
      </Container>
    </section>
  );
}
