import { ProjectCard } from "~entities/ProjectCard/ProjectCard-ui";
import { Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";

export const ProjectsGrid = ({ studentProjects }) => {
  // const { t } = useTranslation();

  return (
    <div className="mt-16">
      <Typography variant="h5" className="text-[#18181B] text-4xl">
        Посмотрите, что умеют наши студенты
      </Typography>

      <div className="grid grid-cols-3 gap-4 py-4 r-md:grid-cols-1">
        {studentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
