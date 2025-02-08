import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { InstagramIcon, GmailIcon, WhatsappIcon } from "~shared/assets/icons";
import { Link } from "react-router-dom";

interface Contact {
  id: number;
  icon: JSX.Element;
  text: string;
  link: string;
}

const contacts: Contact[] = [
  { id: 1, icon: <WhatsappIcon />, text: "+996 707 379 957", link: "tel:+996707379957" },
  { id: 2, icon: <InstagramIcon />, text: "comtehno.kg", link: "https://instagram.com/comtehno.kg" },
  { id: 3, icon: <GmailIcon />, text: "comtehno.kg@gmail.com", link: "mailto:comtehno.kg@gmail.com" }
];

export const CourseInfoContact = () => {
  return (
    <div className="flex flex-col r-lg:gap-4 gap-6 r-md:mt-8">
      {contacts.map(({ id, icon, text, link }) => (
        <Link key={id} to={link} className="flex justify-between items-center bg-white text-teal-700 r-lg:p-4 p-6 rounded-xl">
          <div className="flex items-center r-lg:space-x-2 space-x-3">
            <div className="flex items-center justify-center w-full h-full r-lg:max-w-[24px] r-lg:max-h-[24px] max-w-[32px] max-h-[32px]">
              {icon}
            </div>
            <span className="r-sm:text-sm r-lg:text-base text-[22px]">{text}</span>
          </div>
          <ArrowOutwardIcon className="text-[#A1A1AA] r-sm:text-base r-lg:text-xl text-2xl" />
        </Link>
      ))}
    </div>
  );
};
