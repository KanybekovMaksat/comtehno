import { AskedQuestions } from "~widgets/askedQuestions";
import { Partners } from "~widgets/partners";
import { ReviewsSection } from "~widgets/ReviewsSection";
import { Speciality } from "~widgets/speciality";
import { Startup } from "~widgets/startup";
import { ContactSection } from "~features/ContactSection/ContactSection";
import { Hero } from "~widgets/hero/Hero";

export const HomePage: React.FC = () => {
  return <>
    <Hero/>
    <Speciality />
    <Partners />
    <AskedQuestions />
    <Startup />
    <ReviewsSection />
    <ContactSection/>
  </>;
};