import { Card, CardMedia, Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  image: string;
}

export const ProjectCard = ({ title, image }: ProjectCardProps) => {
  return (
    <Card className="relative rounded-xl overflow-hidden shadow-md">
      <CardMedia component="img" image={image} alt={title} className="h-56 object-cover" />

      <div className="absolute bottom-1 left-1 bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center">
        <Typography variant="h6" className="px-6 py-1 rounded-lg text-lg text-[#18181B] font-semibold bg-[#FFFFFFCC]">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

