import { FC } from "react";
import { ContactCard } from "~entities/contactCard/ContactCard";
import { InstagramIcon } from "~shared/assets/icons";
import { GmailIcon } from "~shared/assets/icons";
import { WhatsappIcon } from "~shared/assets/icons";

export const ContactSection: FC = () => {
  return (
    <div className="text-center my-10  pb-10">
      <h2 className="text-4xl font-light text-[#18181B] leading-[45px]">
        Не нашли ответа на вопрос?
      </h2>
      <p className="text-[#0F766E] leading-[45px] text-4xl font-light ">
        Свяжитесь с нами
      </p>

      <div className="flex justify-center mt-2 space-x-4 max-sm:flex-col max-sm:items-center max-sm:gap-5">
        <ContactCard
          icon={<WhatsappIcon/>}
          text="+996 707 379 957"
          link="/whatsapp"
        />
        <ContactCard
          icon={<InstagramIcon/>}
          text="comtehno.kg"
          link="/instagram"
        />
        <ContactCard
          icon={<GmailIcon/>}
          text="comtehno.kg@gmail.com"
          link="/email"
        />
      </div>
    </div>
  );
};
