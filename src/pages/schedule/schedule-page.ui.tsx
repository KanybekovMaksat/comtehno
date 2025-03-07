import { colors, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ErrorCard } from "~entities/errorCard/errorCard";

export const ShedulePage = () => {
  const sheduleLinkList = [
    {
      title: "РАСПИСАНИЕ 1 КУРСА",
      link: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9D0-cXonQeHW5L8awtWWgXE6VNVuwa6nOYqFjPz0e6hZ8BcV4s2P7gu7WElG5uKIJFdqFXEdYRPD-/pubhtml",
    },
    {
      title: "РАСПИСАНИЕ 2 КУРСА",
      link: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnpkvQGvKGiGg4zG09vMevmpeaqRIVF0o9AvmFZg-eZgRkjlxjPJlc__clUB4LnryXRctBsNQ2sWqa/pubhtml",
    },
    {
      title: "РАСПИСАНИЕ 3 КУРСА",
      link: "#",
    },
  ];

  return (
    <Container className="mt-6">
      <div className="flex justify-between flex-wrap gap-6 r-lg:justify-center">
        <div className="r-md:w-full max-w-96">
          <Typography
            variant="h2"
            className="text-[#0F766E] mb-6 font-semibold r-md:text-4xl"
          >
            Расписание:
          </Typography>
          <div className="flex flex-col gap-6">
            {sheduleLinkList.map((link, index) => (
              <Link
                className="bg-primary px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-all"
                key={index}
                to={link.link}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <ErrorCard />
      </div>
    </Container>
  );
};
