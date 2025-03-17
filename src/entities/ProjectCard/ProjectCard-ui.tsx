import { Card, Typography } from '@mui/material'

interface ProjectCardProps {
  name: string
  photo: string
}

export const ProjectCard: React.FC = ({ name, photo }: ProjectCardProps) => {
  return (
    <Card className="relative rounded-xl overflow-hidden shadow-md">
      <img className="w-[464px] h-[232px] object-cover" src={photo} alt="img" />
      <div className="absolute bottom-1 left-1 bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center">
        <Typography
          variant="h6"
          className="px-6 py-1 rounded-lg text-lg text-[#18181B] font-semibold bg-[#FFFFFFCC]"
        >
          {name}
        </Typography>
      </div>
    </Card>
  )
}
