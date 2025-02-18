import { TrainingProgramAccordion } from "./TrainingProgramAccordion"

export interface courseListTypes {
  title: string,
  body: {
    number: number,
    description: string,
  }[],
}


export const TrainingProgramList: React.FC<askedQuestionProps> = () => { 
  const courseList: courseListTypes[] = [
    { title: "1 курс", body: [
      { number: 1, description: "HTML & CSS" },
      { number: 2, description: "JavaScript" },
      { number: 3, description: "UI Библиотеки" },
    ] },
    { title: "2 курс", body: [
      { number: 1, description: "HTML & CSS" },
      { number: 2, description: "JavaScript" },
      { number: 3, description: "UI Библиотеки" },
    ] },
    { title: "3 курс", body: [
      { number: 1, description: "HTML & CSS" },
      { number: 2, description: "JavaScript" },
      { number: 3, description: "UI Библиотеки" },
    ] }
  ]
  
  return (
    courseList.map((course: courseListTypes, index: number) => (
      <TrainingProgramAccordion {...course} key={index} />
    ))
  )
}
