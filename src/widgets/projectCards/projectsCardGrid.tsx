import { ProjectCard } from "~entities/ProjectCard/ProjectCard-ui";
import { Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";

export interface ProjectCardProps {
  name: string;
  photo: string;
}

interface ProjectGridProps {
  studentProjects: ProjectCardProps[];
}

export const ProjectsGrid: React.FC<ProjectGridProps> = ({
  studentProjects,
}) => {
  // const { t } = useTranslation();

  return (
    <div className="mt-16">
      <Typography variant="h2" className="text-[#18181B] text-[44px]">
        Посмотрите, что умеют наши студенты
      </Typography>
      <div className="grid grid-cols-3 gap-4 py-4 r-md:grid-cols-1">
        {studentProjects.map((project, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
