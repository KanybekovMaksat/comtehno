import { AskedQuestions } from "~widgets/askedQuestions";
import { ReviewsSection } from "~widgets/ReviewsSection";
import { Speciality } from "~widgets/speciality";
import { Startup } from "~widgets/startup";
import { Hero } from "~widgets/hero/Hero";
import { NewsList } from "~widgets/news-list";
import { Partners } from "~widgets/partners";
import { CardSwiper } from "~widgets/teacherSwiper";
import { ContactSection } from "~widgets/ContactSection";
export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Speciality />
      <ReviewsSection />
      <Partners />
      <CardSwiper />
      <Startup />
      <NewsList />
      <AskedQuestions />
      <ContactSection />
    </>
  );
};
