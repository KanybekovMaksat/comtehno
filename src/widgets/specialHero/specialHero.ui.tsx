import { Stack, Typography } from "@mui/material";
import img from "./assets/images/cover.png";
import { CodeIcon } from "./assets/icons/CodeIcon";

export const SpecialHero = () => {
  const data = {
    title: "Frontend разработчик",
    body: "Создает внешний вид и функциональность сайтов и приложений, обеспечивая удобство пользователей. Студенты изучают HTML, CSS, JavaScript и современные инструменты. Выпускники работают в IT, занимаются фрилансом или создают проекты."
  }

  return (
    <Stack className="mt-10 mb-36" direction={"row"} justifyContent={"space-between"}>
      <div>
        <div className="flex gap-4 mb-6 items-center">
          <CodeIcon />
          <Typography className="text-[#0F766E] text-base" variant="caption">Программирование</Typography>
          <Typography className="text-base" variant="caption">Техник-программист</Typography>
        </div>
        <Typography className="text-[44px] uppercase mb-2" variant="h2">{data.title}</Typography>
        <Typography className="max-w-2xl text-2xl font-light" variant="body1">{data.body}</Typography>
      </div>
      <img className="max-w-2xl" src={img} alt="" />
    </Stack>
  )
};