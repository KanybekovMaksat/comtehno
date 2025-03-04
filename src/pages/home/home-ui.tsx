import { AskedQuestions } from '~widgets/askedQuestions'
import { ReviewsSection } from '~widgets/ReviewsSection'
import { Speciality } from '~widgets/speciality'
import { Startup } from '~widgets/startup'
import { NewsList } from '~widgets/news-list'
import { Partners } from '~widgets/partners'
import { CardSwiper } from '~widgets/teacherSwiper'
import { ContactSection } from '~widgets/ContactSection'
import { HomeHero } from '~widgets/hero'
import { AboutAccordion } from '~widgets/AboutAccordion'

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <NewsList />
      <AboutAccordion />
      <Speciality />
      <ReviewsSection />
      <Partners />
      <CardSwiper />
      <Startup />
      <AskedQuestions />
      <ContactSection />
    </>
  )
}
