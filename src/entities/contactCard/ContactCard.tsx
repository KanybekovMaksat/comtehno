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
    <Link className="ml-0" to={link}>
      <Card className="r-md:w-80 w-[398px] flex justify-between bg-[#F4F4F5] r-sm:h-14 h-[80px] items-center p-3 shadow-md rounded-lg transition hover:shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center min-w-[40px] min-h-[40px]">
            {icon}
          </div>
          <div>
            <span className="text-gray-800 r-md:text-lg text-xl font-normal">
              {text}
            </span>
          </div>
        </div>
        <ArrowIcon />
      </Card>
    </Link>
  );
};
