import { Container, Typography } from "@mui/material";
import { AskedQuestionsList } from "~features/askedQuestionsList";

export const AskedQuestions: React.FC = () => {
  return <Container className="max-w-[1440px] r-sm:mb-20 mb-[150px]">
    <Typography variant="h2" className="r-sm:text-center r-sm:text-[32px] text-4xl mb-4">Часто задаваемые вопросы</Typography>
    <AskedQuestionsList />
  </Container>
};