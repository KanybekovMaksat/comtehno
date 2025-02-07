import { Chip } from "@mui/material";
import { Avatar as MuiAvatar } from "@mui/material";
import { CssIcon, HtmlIcon, JSIcon, MiroIcon, NodeJsIcon, ReactIcon, VueJsIcon } from "~shared/assets/icons";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <MuiAvatar src={src} alt={alt} sx={{ width: 80, height: 80 }} />;
};

const toolIcons: Record<string, JSX.Element> = {
  JavaScript: <JSIcon />,
  HTML: <HtmlIcon />,
  CSS: <CssIcon />,
  React: <ReactIcon />,
  Vue: <VueJsIcon />,
  Node: <NodeJsIcon />,
  Miro: <MiroIcon />,
};

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  const icon = toolIcons[label];

  return (
    <Chip
      label={
        <div className="flex items-center justify-center gap-2">
      {icon && <div className="w-10 h-10 flex items-center justify-center">{icon}</div>}
      {label}
        </div>
      }
      variant="outlined"
      className="h-12"
    />
  );
};
