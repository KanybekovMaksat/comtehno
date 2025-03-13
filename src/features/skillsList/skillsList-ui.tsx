import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SkillsListProps {
  skills: {
    name: string;
  }[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const midIndex = Math.ceil(skills.length / 2);
  // const leftColumn = skills.slice(0, midIndex);
  // const rightColumn = skills.slice(midIndex);

  const { t } = useTranslation();

  return (
    <div className="bg-[#f6f6f7] rounded-xl p-4 w-[720px]">
      <Typography variant="subtitle1" color="gray" mb={1}>
        {t("resume.skills")}
      </Typography>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Typography key={index} className="text-xl" variant="caption">
            — {skill.name}
          </Typography>
        ))}
      </div>
    </div>
  );
};
