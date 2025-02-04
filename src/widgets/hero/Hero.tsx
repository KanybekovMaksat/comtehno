import { Container, Typography } from "@mui/material";
import Carusel from "~entities/caruselHero/caruselHero";

export function Hero() {
  return (
    <section
      className="bg-cover pt-[30px] px-4 md:px-8 lg:px-16 mb-[150px]"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/62af/3f67/a8359c9b0a95a9bbe5fbfbd5c3580bda?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CO9iPM31B8CsG3mRSK7901SmZfeKBxhz2WnJrUseXrQjnCG97oZU-izAvPf3tIY6LDOfQ8I60q7vkJ-QNZaH6gFzoYjuqsY7OToST~H593APWG9L8W8Mops6b9QdLOwGXLz41ZmnMpml6nALhAIszyEkCy3xt89nv662-LIg-toEpdW41M53K0UGp5NFA8aHZ9gsa~JU4aAWvZR2ZTbM4VmGU8bK2Q-G8oALbpl10a5lrqCyySmnB0iAM0C4qu4b5dYaNc7yV48L2tzgvp7WqPTzPUltsgecZ9MJ~RVE81eHVHf4Ynfzj82cg4M07IBgiP1VCIapr0QdBmshFlP-zw__')`,
      }}
    >
      <Container className="max-w-[1440px]">
        <div>
          <Typography variant="h3" className="mb-16 text-white font-geologica sm:text-[120px] text-[50px] font-[600] text-center">
            Подберите Программу обучения за 5 минут
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
