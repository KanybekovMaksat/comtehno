import { ProjectCard } from "~entities/ProjectCard/ProjectCard-ui";
import { projects } from "~entities/ProjectCard/ProjectCardData";
import { Typography } from "@mui/material";

export const ProjectsGrid = () => {
  return (
    <div className="p-4 mt-16">
      <Typography variant="h5" className="text-[#18181B] text-4xl">Посмотрите, что умеют наши студенты</Typography>

      <div className="grid grid-cols-3 gap-4 py-4 r-md:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
