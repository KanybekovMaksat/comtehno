import { TrainingProgramAccordion } from "./TrainingProgramAccordion";

export interface courseListTypes {
  name: string;
  modules: {
    name: string;
  }[];
}

export interface TrainingProgramListProps {
  courses: courseListTypes[];
}

export const TrainingProgramList: React.FC<TrainingProgramListProps> = ({
  courses,
}) => {
  return courses.map((course, index: number) => (
    <TrainingProgramAccordion {...course} key={index} />
  ));
};
