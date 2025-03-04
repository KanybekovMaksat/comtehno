import { Stack } from "@mui/material";
import { AskedQuestion } from "~entities/askedQuestion";
import { useTranslation } from "react-i18next";

interface Question {
  title: string;
  description: string;
};

export const AskedQuestionsList: React.FC = () => {

  const { t } = useTranslation();

  const questionList: Question[] = [
    {
      title: t('questionList.title1'),
      description: t('questionList.answer1')
    },
    {
      title: t('questionList.title2'),
      description: t('questionList.answer2')
    },
    {
      title: t('questionList.title3'),
      description: t('questionList.answer3')
    },
    {
      title: t('questionList.title4'),
      description: t('questionList.answer4')
    },
    {
      title: t('questionList.title5'),
      description: t('questionList.answer5')
    }
  ];

  return <Stack direction={"column"}>
    {questionList.map((question: Question, index: number) => (
      <AskedQuestion key={index} {...question} />
    ))}
  </Stack>;
};