import { Outlet} from 'react-router-dom';
import { Footer } from '~widgets/footer';
import { Header } from '~widgets/header';
import { ReviewsSection } from '~widgets/ReviewsSection';

export function GenericLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <ReviewsSection/>
      <Footer />
    </div>
  );
}

export function IntroLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

