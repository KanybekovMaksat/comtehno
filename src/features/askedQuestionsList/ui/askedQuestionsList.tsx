import { Stack } from "@mui/material";
import { AskedQuestion } from "~entities/askedQuestion";

export const AskedQuestionsList: React.FC = () => {
  type Question = {
    title: string;
    description: string;
  };

  const questionList: Question[] = [
    {
      title: "Можно ли поступить в КОМТЕХНО после 9 класса?",
      description: "Да, вы можете поступить в колледж КОМТЕХНО после 9 класса. Для этого необходимо предоставить следующие документы: "
    },
    {
      title: "Какие документы необходимы для зачисления в колледж?",
      description: "Аттестат об основном общем образовании (9 класс). 6 фотографий 3×4 см. Копия паспорта или свидетельства о рождении. Военный билет или приписное свидетельство (если есть)."
    },
    {
      title: "Какие вступительные экзамены нужно сдать?",
      description: "Вступительные экзамены не требуются, зачисление проходит по среднему баллу аттестата."
    },
    {
      title: "Можно ли перевестись из другого учебного заведения в ваш колледж?",
      description: "Да, перевод возможен при наличии свободных мест."
    },
    {
      title: "В чем отличие КОМТЕХНО от других колледжей?",
      description: "Колледж ориентирован на IT-специальности, имеет опытных наставников и помогает студентам в профессиональном развитии."
    }
  ];

  return <Stack direction={"column"}>
    {questionList.map((question: Question, index: number) => (
      <AskedQuestion key={index} {...question} />
    ))}
  </Stack>;
};