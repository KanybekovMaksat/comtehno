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
    <div className="flex flex-col gap-6 r-md:gap-4">
      <div className="flex gap-2 text-[#52525B]">
        <span>{date}</span>
        <span>{category}</span>
      </div>
      <Typography
        variant="h1"
        className="r-md:max-w-sm max-w-4xl font-light r-md:leading-10 leading-[55px] r-md:text-[30px] text-5xl"
      >
        {course} {title} о КОМТЕХНО
      </Typography>
      <div className="max-w-[830px]">
        <img className="w-full rounded-lg mb-6" src={image} alt="" />
        <div className="flex flex-col gap-8">
          {questionsList.map((question, index) => (
            <div key={index} className="max-w-[830px]">
              <Typography className="text-2xl font-medium mb-2" variant="h3">
                {question.question}
              </Typography>
              <Typography className="text-[20px] font-light" variant="body1">
                {question.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
