import { Container,  Typography } from "@mui/material";
import React from "react";
import { Support } from "~features/Support";
import { useNavigate } from "react-router-dom";

interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {
  error: string;
  className?: string;
}



export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { error, className } = props;
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return <Container className="max-w-[1440px] r-md:mb-[80px] mb-[150px] r-md:mt-[40px] mt-[80px] r-md:flex-col r-md:items-center flex justify-between">
    <div className="flex flex-col gap-8 r-md:mb-12 r-md:text-center">
      {error ? 
        <Typography className="r-md:text-5xl text-[64px] font-bold text-[#0F766E]">{error}</Typography> :
        <Typography className="r-md:text-5xl text-[64px] font-bold text-[#0F766E]">Something went wrong</Typography>
      }
      <h1 className="r-md:text-xl text-[32px] text-[#52525B]">
        Такой страницы не существует
      </h1>
      <button 
        className="bg-[#0D9488] r-md:text-base text-xl text-white rounded-xl w-[70%] h-[48px] r-md:w-full"
        onClick={handleGoHome}
      >
      Перейти на главную
      </button>
    </div>
    <Support />
  </Container>

};