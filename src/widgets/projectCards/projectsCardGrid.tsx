import { ProjectCard } from "~entities/ProjectCard/ProjectCard-ui";
// import { projects } from "~entities/ProjectCard/ProjectCardData";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const ProjectsGrid = () => {

  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.project1"),
      image: "https://umi.ru/images/articles/sozdat-sait-restaurant.webp",
    },
    {
      title: t("projects.project2"),
      image: "https://opis-cdn.tinkoffjournal.ru/mercury/choose-your-fighter-games-9.cjiu9j..png",
    },
    {
      title: t("projects.project3"),
      image: "https://fondy.ua/uploads/2023/08/knowledge_onlinestore_ru.png",
    },
    {
      title: t("projects.project4"),
      image: "https://samovar-web.ru/upload/iblock/649/649b3ffae07092e80b24f8a21d6fe5a5.jpg",
    },
    {
      title: t("projects.project5"),
      image: "https://www.motocms.com/blog/wp-content/uploads/2017/11/bedentist.png",
    },
    {
      title: t("projects.project6"),
      image: "https://s.tmimgcdn.com/scr/400x250/76100/relish-ruelle-adaptivnyj-sablon-sajta-salona-krasoty_76139-3-original.jpg",
    },
  ];

  return (
    <div className="mt-16">
      <Typography variant="h5" className="text-[#18181B] text-4xl">Посмотрите, что умеют наши студенты</Typography>

      <div className="grid grid-cols-3 gap-4 py-4 r-md:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
