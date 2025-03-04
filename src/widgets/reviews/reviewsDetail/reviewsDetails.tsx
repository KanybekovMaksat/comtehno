import { Typography } from "@mui/material";
import { formatDate } from "~shared/ui/date";

interface ReviewsDetailsProps {
  createdAt: string;
  studentCategory: string;
  studentCourse: string;
  studentFullName: string;
  studentPhoto: string;
  questionAnswers: {
    question: string;
    answer: string;
  }[];
}

export const ReviewsDetails: React.FC = ({
  createdAt,
  studentCategory,
  studentCourse,
  studentFullName,
  studentPhoto,
  questionAnswers,
}: ReviewsDetailsProps) => {
  return (
    <div className="flex flex-col gap-6 r-md:gap-4">
      <div className="flex gap-2 text-[#52525B]">
        <span>{formatDate(createdAt)}</span>
        <span>{studentCategory}</span>
      </div>
      <Typography
        variant="h1"
        className="r-md:max-w-sm max-w-4xl font-light r-md:leading-10 leading-[55px] r-md:text-[30px] text-5xl"
      >
        Отзыв студента {studentCourse} курса {studentFullName} о КОМТЕХНО
      </Typography>
      <div className="max-w-[830px]">
        <img className="w-full rounded-lg mb-6" src={studentPhoto} alt="" />
        <div className="flex flex-col gap-8">
          {questionAnswers.map((reviewQuestion, index) => (
            <div key={index} className="max-w-[830px]">
              <Typography className="text-2xl font-medium mb-2" variant="h3">
                {reviewQuestion.question}
              </Typography>
              <Typography className="text-[20px] font-light" variant="body1">
                {reviewQuestion.answer}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
