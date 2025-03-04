import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Link } from "react-router-dom";
import { pathLinks } from "~shared/lib";
import { useTranslation } from "react-i18next";

interface NetworkProps {
  className?: string;
}

interface InfoHeaderItem {
  img: JSX.Element;
  title: string;
  link: string;
}

export const Network: React.FC<NetworkProps> = () => {
  const { t } = useTranslation();

  const infoHeader: InfoHeaderItem[] = [
    {
      img: <LocalPhoneIcon className="text-black" />,
      title: "+996 707 379 957",
      link: pathLinks.whatsapp,
    },
    {
      img: <EmailIcon className="text-black" />,
      title: "comtehno.kg@gmail.com",
      link: pathLinks.gmail,
    },
    {
      img: <LocationOnIcon className="text-black" />,
      title: t("homepage.header.headerTop.location"),
      link: pathLinks.location,
    },
  ];

  return (
    <AppBar
      position="static"
      className="bg-white shadow-none border-b-[1px] border-solid border-[#A1A1AA] mb-2"
    >
      <Toolbar className="flex justify-between p-0">
        <div className="flex items-center gap-4">
          {infoHeader.map((item: InfoHeaderItem, index: number) => (
            <Link target="_blank" to={item.link} key={index}>
              <Tooltip title={item.title}>
                <IconButton color="inherit">{item.img}</IconButton>
              </Tooltip>
              <Typography
                className="font-normal"
                color="black"
                variant="caption"
              >
                {item.title}
              </Typography>
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          <Link target="_blank" to={pathLinks.instangram}>
            <Tooltip title="Instagram">
              <IconButton>
                <InstagramIcon className="text-black" />
              </IconButton>
            </Tooltip>
          </Link>
          <Link target="_blank" to={pathLinks.whatsapp}>
            <Tooltip title="WhatsApp">
              <IconButton>
                <WhatsAppIcon className="text-black" />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
