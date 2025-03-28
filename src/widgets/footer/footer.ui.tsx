import AccordionUsage from "../../entities/accardionDataFooter/accardionData";
import AddressSection from "../../features/adressFooter/adressFooter";
import LogoFooter from "../../shared/assets/svg/logoFooter.svg";
import LinksSection from "../../features/linkSectionFooter/linkSection";
import SpecialtiesSection from "../../entities/specialtiesSectionFooter/specialSection";
import { Container } from "@mui/material";
import { FooterSmal } from "~widgets/footerSmall/footerSmall";

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-[#FAFAFA] r-md:pt-[40px] border-t-[1px] border-[#E4E4E7] pt-[80px] mt-10">
      <Container className="max-w-[1440px] r-sm:mb-20 mb-[150px]">
        <div className="pb-[40px] border-b-[1px] border-[#E4E4E7]">
          <img className="mb-[40px]" src={LogoFooter} alt="Logo" />
          <div className="footer_category flex-wrap flex justify-between">
            <AddressSection />
            <div className="flex r-md:hidden flex-wrap gap-[24px]">
              <LinksSection
                title="Колледж"
                links={[
                  { title: "О нас", href: "/about" },
                  { title: "Новости", href: "/news" },
                  { title: "Мероприятия", href: "/event" },
                  { title: "Отзывы", href: "/reviews" },
                ]}
              />
              <LinksSection
                title="Полезные ссылки"
                links={[
                  { title: "Makalabox", href: "http://makalabox.com" },
                  { title: "Профориентация", href: "/about" },
                  { title: "Расписание", href: "/timetable" },
                  { title: "Библиотека", href: "https://lib-intuit.online/" },
                ]}
              />
              <SpecialtiesSection />
            </div>
          </div>
          <div className="r-md:block hidden ">
            <AccordionUsage />
          </div>
        </div>
        <FooterSmal />
      </Container>
    </footer>
  );
};
