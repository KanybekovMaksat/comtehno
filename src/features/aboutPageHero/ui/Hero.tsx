import { Typography } from "@mui/material";
import { AboutPageCards } from "./infoCards";

export const Hero = () => {
  return (
    <div className="rounded-xl mb-[150px] flex flex-col gap-16">
      <img
        src="https://s3-alpha-sig.figma.com/img/62af/3f67/a8359c9b0a95a9bbe5fbfbd5c3580bda?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EeP5C56cb~SzznVtEIBTD-qM~o6ELds3xBRPUJHS3qEI8k82q-FwS9bg20W~FSxy~QiukjHwnLCFiDzOLlscNlkueBPGorUGNeNIXBG3Y3hAAk9vTOV9SIh7KCmkANlNYseHyKi0sydtKsk5YBZeEL4YTW~FQuTW0rudFvxlCGk5CzgpOc7-CgwtizT1mRLF4SKRidvI2hd97~t3vT~f~mUYMhQFlKhBa8GRbnXKarbBkVLeDKnWzpYeJavOBBr1x4XVuYams5qsEbd3aGj7WXiYeLGZgws0EXhPTo6uNJUVzNgmWyq8MVctaDkwKuXnxacAAndw7ZLg5P0Ue4VoJQ__"
        alt="Комтехно"
        className="w-full h-[400px] r-sm:h-[300px] object-cover rounded-lg"
      />

      <div className="w-full flex r-md:flex-col items-start justify-center gap-16 container my-16 r-md:gap-6 r-sm:items-center">
        <Typography variant="h3" className="font-bold text-[#0F766E] ">
          КОМТЕХНО
        </Typography>

        <Typography  className="text-gray-700 text-4xl font-light">
          — это современное образовательное учреждение, где студенты получают
          качественное образование и навыки, востребованные на рынке труда.
        </Typography>
      </div>
      <AboutPageCards/>
    </div>
  );
};
