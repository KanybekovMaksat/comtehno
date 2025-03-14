import { Chip } from "@mui/material";
import { Avatar as MuiAvatar } from "@mui/material";
// import { CssIcon, HtmlIcon, JSIcon, MiroIcon, NodeJsIcon, ReactIcon, VueJsIcon } from "~shared/assets/icons";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <MuiAvatar src={src} alt={alt} sx={{ width: 128, height: 128 }} />;
};

// const toolIcons: Record<string, JSX.Element> = {
//   JavaScript: <JSIcon />,
//   HTML: <HtmlIcon />,
//   CSS: <CssIcon />,
//   React: <ReactIcon />,
//   Vue: <VueJsIcon />,
//   Node: <NodeJsIcon />,
//   Miro: <MiroIcon />,
// };

interface BadgeProps {
  name: string;
  photo: string;
}

export const Badge: React.FC<BadgeProps> = ({ name, photo }) => {
  // const icon = toolIcons[label];

  return (
    <Chip
      label={
        <div className="flex items-center justify-center gap-2">
          {photo && <img className="w-6" src={photo} alt="img" />}
          <span className="text-base">{name}</span>
        </div>
      }
      variant="outlined"
      className="h-12 bg-[#F4F4F5] border-none"
    />
  );
};
