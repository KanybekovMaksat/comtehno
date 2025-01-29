import { AskedQuestions } from "~widgets/askedQuestions";
import { Partners } from "~widgets/partners";
import { Speciality } from "~widgets/speciality";

export const HomePage: React.FC = () => {
  return <>
    <Speciality />
    <Partners />
    <AskedQuestions />
  </>;
};