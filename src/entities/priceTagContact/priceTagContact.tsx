import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import path from "path";
import { Link } from "react-router-dom";
import { InstagramIcon } from "~shared/assets/icons";
import { GmailIcon } from "~shared/assets/icons";
import { WhatsappIcon } from "~shared/assets/icons";
import { pathLinks } from "~shared/lib";

interface Contact {
  id: number;
  icon: JSX.Element;
  text: string;
  link: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    icon: <WhatsappIcon />,
    text: "+996 707 379 957",
    link: pathLinks.whatsapp,
  },
  {
    id: 2,
    icon: <InstagramIcon />,
    text: "comtehno.kg",
    link: pathLinks.instangram,
  },
  {
    id: 3,
    icon: <GmailIcon />,
    text: "comtehno.kg@gmail.com",
    link: pathLinks.gmail,
  },
];

export const PriceTagContact = () => {
  return (
    <div className="flex flex-col w-full gap-6 justify-center">
      {contacts.map((contact: Contact) => (
        <Link
          key={contact.id}
          to={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="cursor-pointer r-md:h-14 h-[80px] rounded-xl bg-[#F4F4F5] flex items-center justify-between r-md:p-4 p-6">
            <div className="flex gap-4 items-center">
              {contact.icon}
              <p className="r-md:text-base text-xl font-medium text-black">
                {contact.text}
              </p>
            </div>
            <ArrowOutwardIcon className="w-6 h-6" />
          </div>
        </Link>
      ))}
    </div>
  );
};
