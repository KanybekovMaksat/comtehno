import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SkillsListProps {
  skills: string[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const midIndex = Math.ceil(skills.length / 2);
  const leftColumn = skills.slice(0, midIndex);
  const rightColumn = skills.slice(midIndex);

  const { t } = useTranslation();

  return (
    <Box
      p={1}
      borderRadius="12px"
      bgcolor="#f6f6f7"
      sx={{ maxWidth: 600, width: "100%" }}
    >
      <Typography variant="subtitle1" color="gray" mb={1}>
        {t("resume.skills")}
      </Typography>
      <Grid container spacing={isMobile ? 2 : 6} direction={isMobile ? "column" : "row"}>
        <Grid item xs={12} sm={6}>
          {leftColumn.map((skill, index) => (
            <Typography key={index} variant="body2" className="p-2">
              — {skill}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {rightColumn.map((skill, index) => (
            <Typography key={index} variant="body2" className="p-2">
              — {skill}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
