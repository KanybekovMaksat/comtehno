import { Container } from "@mui/material";
import { ContactCard } from "~entities/contactCard/ContactCard";
import { InstagramIcon } from "~shared/assets/icons";
import { GmailIcon } from "~shared/assets/icons";
import { WhatsappIcon } from "~shared/assets/icons";
import { useTranslation } from "react-i18next";
import { pathLinks } from "~shared/lib";

export const ContactSection = () => {
  const { t } = useTranslation();

  const messengerList = [
    {
      icon: <WhatsappIcon />,
      text: "+996 707 379 957",
      link: pathLinks.whatsapp,
    },
    {
      icon: <InstagramIcon />,
      text: "comtehno.kg",
      link: pathLinks.instangram,
    },
    {
      icon: <GmailIcon />,
      text: "comtehno.kg@gmail.com",
      link: pathLinks.gmail,
    },
  ];

  return (
    <Container className="max-w-[1440px]">
      <div className="text-center my-10 pb-10">
        <h2 className="r-sm:text-3xl text-4xl font-light text-[#18181B] leading-[45px]">
          {t("contacts.notFoundAnswer")}
        </h2>
        <p className="text-[#0F766E] leading-[45px] r-sm:text-3xl text-4xl font-light mb-8">
          {t("contacts.callUs")}
        </p>
        <div className="flex justify-center flex-wrap gap-6 space-x-4 r-sm:flex-col r-sm:items-center r-sm:gap-4">
          {messengerList.map((card, index) => (
            <ContactCard {...card} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
