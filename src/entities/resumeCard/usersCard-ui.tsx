import { Avatar, Badge } from "./userCard-model";
import { Stack, Typography, Box } from "@mui/material";

interface UserCardProps {
  name: string;
  role: string;
  avatar: string;
  tools: string[];
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  avatar,
  tools,
}) => {
  return (
    <Stack spacing={2} alignItems=" ">
      <div className="flex items-center gap-4">
        <Avatar src={avatar} alt={name} />
        <div className="flex flex-col justify-between">
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="body2" color="gray">
            {role}
          </Typography>
        </div>
      </div>
      <Box display="flex" gap={1} flexWrap="wrap">
        {tools.map((tool) => (
          <Badge key={tool} label={tool} />
        ))}
      </Box>
    </Stack>
  );
};
