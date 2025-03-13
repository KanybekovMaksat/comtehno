import { TrainingProgramAccordion } from "./TrainingProgramAccordion";

interface courseListTypes {
  name: string;
  modules: {
    name: string;
  }[];
}
interface TrainingProgramListProps {
  courses: courseListTypes[];
}

export const TrainingProgramList: React.FC<TrainingProgramListProps> = ({
  courses,
}) => {
  return courses?.map((course, index: number) => (
    <TrainingProgramAccordion {...course} key={index} />
  ));
};
