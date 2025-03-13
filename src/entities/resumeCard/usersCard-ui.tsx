import { Avatar, Badge } from "./userCard-model";
import { Stack, Typography, Box } from "@mui/material";

interface UserCardProps {
  fullName: string;
  photo: string;
  position: string;
  tools: {
    name: string;
    photo: string;
  }[];
}

export const UserCard: React.FC<UserCardProps> = ({
  fullName,
  photo,
  position,
  tools,
}) => {
  return (
    <Stack spacing={2} alignItems=" ">
      <div className="flex items-center gap-4 r-sm:flex-col r-sm:items-start">
        <Avatar src={photo} alt="profil" />
        <div className="flex flex-col justify-between">
          <Typography variant="h5" fontWeight="bold">
            {fullName}
          </Typography>
          <Typography variant="body2" color="gray" className="text-xl">
            Должность: {position}
          </Typography>
        </div>
      </div>
      <span className="text-tundora">Инструменты</span>
      <div className="flex flex-wrap gap-4 max-w-[710px]">
        {tools.map((tool, index) => (
          <Badge key={index} {...tool} />
        ))}
      </div>
    </Stack>
  );
};
