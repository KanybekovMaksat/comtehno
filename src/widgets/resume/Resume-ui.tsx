import { UserCard } from "~entities/resumeCard/usersCard-ui";
import { SkillsList } from "~features/skillsList/skillsList-ui";
import { Stack, Typography } from "@mui/material";

export const Resume = () => {
  const user = {
    name: "Каныбеков Максат",
    role: "Frontend-разработчик",
    avatar: "https://s3-alpha-sig.figma.com/img/adb1/5f73/d293422a885d1a0b2818e825ad470162?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ql1KAO4fW~aCGy7QpKBpgGFqxBPYvcrvpjj~2D8-O~a9-Ef~UJpBmsStyter~jZLkrjFlSTkQrgl76qaKq1IWLyoKm9Eo22SE6Bc1-hXF8vr1EOuGWLwznvPF~7rfdWITSWzFwNH0i9UU23JzQa~is9ZQnkGm7P8o1zGESTzA4C9WKxY02Uvv8PkOc4UgDnA6I8H~cdODuMjH60sxlaqv8mCys8JjrmVZtgF9DqdyPtHTmAycC0oKXBI93Z57ddbeyWzdP08bUwi3OsT4C1Yd7fnunC58XVxla4wdBZ9uyNVR28OU2QD~3kttN04NW-0g3dgMJK1rz4PtcLlELktFA__",
    tools: ["JavaScript", "HTML", "CSS", "React", "Vue.js", "Node.js", "Miro"],
    skills: [
      "Делаю адаптивную кроссбраузерную верстку на HTML и CSS",
      "Работаю в Figma",
      "Работаю в VS Code",
      "Знаю JavaScript и TypeScript",
      "Владею React.js / Vue.js / Angular",
      "Пишу серверный код на Node.js",
      "Работаю с Git",
      "Тестирую и оптимизирую веб-приложения",
      "Коммуникабельный, понимаю свою роль в команде",
    ],
  };

  return (
    <Stack spacing={4} maxWidth={1440} mx="auto" my={8}>
      <Typography variant="h4" textAlign="center" className="r-sm:text-start">
        Ваше резюме после выпуска
      </Typography>
      <div className="flex justify-around r-md:flex-col r-md:gap-5">
        <UserCard {...user} />
        <SkillsList skills={user.skills} />
      </div>
    </Stack>
  );
};
