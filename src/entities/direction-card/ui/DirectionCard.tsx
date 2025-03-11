import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface DirectionCardProps {
  title: string;
  department?: number;
  speciality?: number;
  direction?: number;
  institutions?: number;
  icon: React.ReactNode;
  link: string;
}

export const DirectionCard: React.FC<DirectionCardProps> = ({
  title,
  institutions,
  department,
  speciality,
  direction,
  icon,
  link,
}) => {
  const { t } = useTranslation();

  console.log(t);

  return (
    <Card className="shadow-lg rounded-2xl overflow-hidden w-full max-w-[460px] hover:scale-105 transition-all">
      <CardContent className="relative p-6 min-h-[140px]">
        <div className="absolute right-6 bottom-[-90px] text-gray-200 text-7xl">
          {icon}
        </div>
        <Typography variant="h6" className="font-semibold text-gray-900">
          {title}
        </Typography>

        {/* Conditionally render each property */}
        {department && (
          <Typography variant="body2" className="text-gray-500">
            {department} {t("aboutPage.department")}
          </Typography>
        )}
        {institutions && (
          <Typography variant="body2" className="text-gray-500">
            {institutions} {t("aboutPage.institutions")}
          </Typography>
        )}
        {direction && (
          <Typography variant="body2" className="text-gray-500">
            {direction} {t("aboutPage.direction")}
          </Typography>
        )}
        {speciality && (
          <Typography variant="body2" className="text-gray-500">
            {speciality} {t("aboutPage.speciality")}
          </Typography>
        )}
      </CardContent>
      <CardActions className="p-4">
        <Link
          to={link}
          // variant="contained"
          // fullWidth
          className="bg-[#09926D] hover:bg-[#077A5A] text-white rounded-lg capitalize"
        >
          {t("aboutPage.learnMore")}
        </Link>
      </CardActions>
    </Card>
  );
};
