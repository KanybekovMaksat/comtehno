import { Hero } from "~features/aboutPageHero";
import { ContactSection } from "~features/ContactSection/ContactSection";
import { AskedQuestions } from "~widgets/askedQuestions";
import { Speciality } from "~widgets/speciality";
import { AboutAccordion } from "~features/AboutAccordion/AboutAccordion";
import { DirectionsList } from "~widgets/directions-list";




export function AboutPage() {
  return (
    <div className="px-4 ">
      <Hero />
      <DirectionsList/>
      <AboutAccordion/>
      <Speciality/>
      <AskedQuestions/>
      <ContactSection/>
    </div>
  );
}