import { Chip } from "@mui/material";
import { Avatar as MuiAvatar } from "@mui/material";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <MuiAvatar src={src} alt={alt} sx={{ width: 80, height: 80 }} />;
};


interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return <Chip label={label} variant="outlined" />;
};
