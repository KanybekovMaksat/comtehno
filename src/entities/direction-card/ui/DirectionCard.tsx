import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface DirectionCardProps {
  title: string;
  faculties: number;
  programs: number;
  icon: React.ReactNode;
}

export const DirectionCard: React.FC<DirectionCardProps> = ({ title, faculties, programs, icon }) => {
  const { t } = useTranslation();
  return (
    <Card className="shadow-lg rounded-2xl overflow-hidden w-full max-w-[460px] hover:scale-105 transition-all">
      <CardContent className="relative p-6 min-h-[140px]">
        <div className="absolute right-6 bottom-[-90px] text-gray-200 text-7xl">{icon}</div>
        <Typography variant="h6" className="font-semibold text-gray-900">{title}</Typography>
        <Typography variant="body2" className="text-gray-500">{faculties} {t("aboutPage.faculties")}</Typography>
        <Typography variant="body2" className="text-gray-500">{programs} {t("aboutPage.programs")}</Typography>
      </CardContent>
      <CardActions className="p-4">
        <Button variant="contained" fullWidth className="bg-[#09926D] hover:bg-[#077A5A] text-white rounded-lg capitalize">
          {t("aboutPage.learnMore")}
        </Button>
      </CardActions>
    </Card>
  );
};
