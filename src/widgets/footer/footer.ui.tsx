import FooterSmal from '~widgets/footerSmall/footerSmall';
import AccordionUsage from '../../entities/accardionDataFooter/accardionData';
import AddressSection from '../../features/adressFooter/adressFooter';
import LogoFooter from '../../shared/assets/svg/logoFooter.svg';
import LinksSection from '../../features/linkSectionFooter/linkSection';
import SpecialtiesSection from '../../entities/specialtiesSectionFooter/specialSection';
import { Container } from '@mui/material';

export const Footer: React.FC = () => (
    <footer className="footer bg-[#FAFAFA] pt-[40px] border-t-[1px] border-[#E4E4E7] md:pt-[80px]">
      <Container className="max-w-[1440px] mb-[150px]">

    <div className="container pb-[40px] border-b-[1px] border-[#E4E4E7]">
        <img className="mb-[40px]" src={LogoFooter} alt="Logo" />
        <div className="footer_category flex-wrap flex justify-between">
            <AddressSection />
            <div className="flex flex-wrap gap-[24px]">
            <LinksSection title="Колледж" links={['О нас', 'Новости', 'Мероприятия', 'Отзывы']} />
            <LinksSection title="Полезные ссылки" links={['Makalabox', 'Профориентация', 'Расписание', 'Библиотека']} />
            <SpecialtiesSection />
            </div>
        </div>
        <div className="sm:hidden block">
            <AccordionUsage />
        </div>
        </div>
        <FooterSmal />
      </Container>
  </footer>
);

