import { AskedQuestions } from "~widgets/askedQuestions";
import { Speciality } from "~widgets/speciality";
import { DirectionsList } from "~widgets/directions-list";
import { Hero } from "~widgets/aboutHero";
import { AboutAccordion } from "~widgets/AboutAccordion";
import { ContactSection } from "~widgets/ContactSection";

export function AboutPage() {
  return (
    <>
      <Hero />
      <DirectionsList />
      <AboutAccordion />
      <Speciality />
      <AskedQuestions />
      <ContactSection />
    </>
  );
}