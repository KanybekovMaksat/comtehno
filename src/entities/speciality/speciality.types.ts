export interface SpecialCardProps {
  id: number;
  title: string;
  specialty: string;
  description: string;
  photo: string;
  category: {
    id: number;
    name: string;
    photo: string;
  };
  slug: string;
  trainingProgram: {
    trainingTime: string;
    portfolioProjects: string;
    courses: {
      name: string;
      modules: {
        name: string;
      }[];
    }[];
  };
  studentProjects: {
    name: string;
    photo: string;
  }[];
  cv: {
    fullName: string;
    photo: string;
    position: string;
    tools: {
      name: string;
      photo: string;
    }[];
    skills: {
      name: string;
    }[];
  };
}
