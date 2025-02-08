import { Hero } from "~features/aboutPageHero";
import { ContactSection } from "~features/ContactSection/ContactSection";
import { AskedQuestions } from "~widgets/askedQuestions";
import { Speciality } from "~widgets/speciality";
import { AboutAccordion } from "~features/AboutAccordion/AboutAccordion";




export function AboutPage() {
  return (
    <div className="px-4 ">
      <Hero />
      <AboutAccordion/>
      <Speciality/>
      <AskedQuestions/>
      <ContactSection/>
    </div>
  );
}