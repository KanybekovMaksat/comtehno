import { Typography } from "@mui/material";

interface ReviewsDetailsProps {
  course: string;
  title: string;
  questionsList: [
    {
      question: string;
      description: string;
    }
  ];
  image: string;
  date: string;
  category: string;
}

export const ReviewsDetails: React.FC = ({
  course,
  title,
  questionsList,
  image,
  date,
  category,
}: ReviewsDetailsProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 text-[#52525B]">
        <span>{date}</span>
        <span>{category}</span>
      </div>
      <Typography variant="h1" className="max-w-4xl text-5xl">
        {course} {title} о КОМТЕХНО
      </Typography>
      <img className="max-w-3xl rounded-lg" src={image} alt="" />
      <div className="flex flex-col gap-8">
        {questionsList.map((question, index) => (
          <div key={index} className="max-w-[830px]">
            <Typography className="text-2xl mb-2" variant="h3">
              {question.question}
            </Typography>
            <Typography className="text-[20px] font-light" variant="body1">
              {question.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
