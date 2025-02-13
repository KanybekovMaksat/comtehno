import { Container, Typography } from "@mui/material";
import { AboutPageCards } from "./infoCards";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const {t} = useTranslation();
  return (
    <>
      <img
        src="https://s3-alpha-sig.figma.com/img/62af/3f67/a8359c9b0a95a9bbe5fbfbd5c3580bda?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EeP5C56cb~SzznVtEIBTD-qM~o6ELds3xBRPUJHS3qEI8k82q-FwS9bg20W~FSxy~QiukjHwnLCFiDzOLlscNlkueBPGorUGNeNIXBG3Y3hAAk9vTOV9SIh7KCmkANlNYseHyKi0sydtKsk5YBZeEL4YTW~FQuTW0rudFvxlCGk5CzgpOc7-CgwtizT1mRLF4SKRidvI2hd97~t3vT~f~mUYMhQFlKhBa8GRbnXKarbBkVLeDKnWzpYeJavOBBr1x4XVuYams5qsEbd3aGj7WXiYeLGZgws0EXhPTo6uNJUVzNgmWyq8MVctaDkwKuXnxacAAndw7ZLg5P0Ue4VoJQ__"
        alt="Комтехно"
        className="w-full h-[400px] r-sm:mb-6 mb-36 r-sm:h-[300px] object-cover rounded-2xl"/>
      <Container className="max-w-[1440px] mb-36">
        <div className="w-full r-sm:mb-20 mb-36 flex r-md:flex-col items-start justify-center r-sm:gap-2 gap-14 r-md:gap-6 r-sm:items-center">
          <Typography variant="h3" className="r-sm:text-[40px] font-bold text-[#0F766E] ">
            {t('aboutPage.title')}
          </Typography>
          <Typography  className="r-sm:text-[32px] text-gray-700 text-4xl font-light">
            {t('aboutPage.text')}
          </Typography>
        </div>
        <AboutPageCards />
      </Container>
    </>
  );
};
