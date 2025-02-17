import { FC } from "react";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowIcon } from "~shared/assets/icons";

interface ContactCardProps {
  icon: JSX.Element;
  text: string;
  link: string;
}

export const ContactCard: FC<ContactCardProps> = ({ icon, text, link }) => {
  return (
    <Link to={link}>
      <Card className="w-[398px] flex justify-between bg-[#F4F4F5] r-sm:h-14 h-[80px] items-center p-3 shadow-md rounded-lg transition hover:shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center min-w-[40px] min-h-[40px]">
            {icon}
          </div>
          <CardContent className="p-0">
            <p className="text-gray-800 text-xl font-normal">
              {text}
            </p>
          </CardContent>
        </div>
        <ArrowIcon />
      </Card>
    </Link>
  );
};
