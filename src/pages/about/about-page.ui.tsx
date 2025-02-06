import { Hero } from "~features/aboutPageHero";
import { ContactSection } from "~features/ContactSection/ContactSection";
import { AskedQuestions } from "~widgets/askedQuestions";
import { Speciality } from "~widgets/speciality";



export function AboutPage() {
  return (
    <div className="px-4 ">
      <Hero />
      <Speciality/>
      <AskedQuestions/>
      <ContactSection/>
    </div>
  );
}