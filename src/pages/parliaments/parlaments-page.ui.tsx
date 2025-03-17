import { Container, Typography } from "@mui/material";
import { ParlamentList } from "~widgets/parlamentList";

export const ParlamentsPage: React.FC = () => {
  return (
    <div>
      <section
        className="bg-white rounded-3xl r-sm:mb-10 mb-10 r-md:mx-4 mx-6 overflow-hidden r-md:py-10 py-20"
        style={{
          background:
            "linear-gradient(121.65deg, #4D5FF5 2.13%, #5649BF 36.86%, #38E569 96%)",
        }}
      >
        <Container className="max-w-[1440px] text-white ">
          <div className="flex justify-between items-center">
            <div>
              <Typography className="text-5xl font-normal r-md:mb-2 mb-4 r-lg:text-4xl">
                Парламент Колледжа
              </Typography>
              <p className="r-lg:text-xl r-md:text-lg text-2xl max-w-5xl">
                это объединение инициативных студентов, которые занимаются
                организацией культурных и спортивных мероприятий, контролем
                внутреннего порядка, а также поддерживают учебный процесс. Его
                главная цель — улучшение студенческой жизни и создание
                комфортной образовательной среды.
              </p>
            </div>
            {/* <img
              className="max-w-sm r-md:hidden r-lg:max-w-xs"
              src={partnerImg}
              alt="img"
            /> */}
          </div>
        </Container>
      </section>
      <ParlamentList />
    </div>
  );
};
