import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ErrorCard } from "~entities/errorCard/errorCard";

interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
  className?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ error, className }) => {
  return (
    <div className={`pt-[50px] pb-[100px] ${className}`}>
      <Container className="max-w-[1440px]">
        <div className="flex r-lg:justify-center flex-wrap align-start justify-between">
          <div className="flex flex-col r-lg:text-center justify-start mb-[80px]">
            {error && (
              <h2 className="r-sm:text-[48px] r-md:text-[55px] text-[64px] font-[700] r-md:leading-[40px] mb-[24px] leading-[80px] text-[#0F766E] ">
                {error}
              </h2>
            )}
            <h3 className="r-md:text-[26px] r-sm:[22px] r-lg-[29px] text-[32px] font-[400] leading-[40px] text-[#52525B]">
              Такой страницы не существует
            </h3>
            <Link
              className="flex align-center justify-center cursor-pointer text-[19px] font-[400] leading-[23.75px] text-[#fafafa] bg-[#0D9488] pl-[24px] pt-[12px] pr-[24px] pb-[12px] rounded-[12px] mt-[40px]"
              to="/"
            >
              <button>Перейти на главную</button>
            </Link>
          </div>
          <ErrorCard />
        </div>
      </Container>
    </div>
  );
};
