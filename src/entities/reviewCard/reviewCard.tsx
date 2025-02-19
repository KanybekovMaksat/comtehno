import { Card, CardContent, Typography, Button } from "@mui/material";

export interface ReviewProps {
  name: string;
  course: string;
  specialization: string;
  avatar: string;
  steps1: string;
  content1: string;
  steps2: string;
  content2: string;
  steps3: string;
  plans: string;
}

export const ReviewCard: React.FC<ReviewProps> = ({
  name,
  course,
  specialization,
  avatar,
  steps1,
  content1,
  steps2,
  content2,
  steps3,
  plans,  
}) => {
  return (
    <Card className="shadow-lg rounded-2xl max-w-[90vw] flex r-md:flex-col r-md:h-full h-[600px]  overflow-hidden">
      <div className="relative flex-grow md:w-[24rem] h-full md:h-auto">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl"
        />

        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
          <img
            src="https://www.ixbt.com/img/n1/news/2019/11/1/dinoqr.png"
            alt="QR Code"
            className="w-16 h-16"
          />
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3">
          <div className="bg-white rounded-xl shadow-lg text-center">
            <Typography
              variant="h6"
              className="text-[#18181B] text-[20px] md:text-[22px] font-normal"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              className="text-[#52525B] text-[14px] md:text-[16px] font-normal"
            >
              {course}
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="small"
            className="p-2 text-green-500 border-green-500 w-full bg-white text-[#18181B] rounded-xl shadow-lg font-light"
          >
            {specialization}
          </Button>
        </div>
      </div>

      <CardContent className="flex-grow flex flex-col justify-around gap-4 p-4 r-md:p-6 w-full">
        <div className="flex r-md:flex-col justify-between">
          <Typography
            variant="h6"
            className="font-semibold md:w-1/3 text-[20px] md:text-[22px]"
          >
            {steps1}
          </Typography>
          <Typography
            variant="body2"
            className="w-1/2 r-md:w-full text-[16px] md:text-[20px]"
          >
            {content1}
          </Typography>
        </div>

        <div className="flex r-md:flex-col justify-between">
          <Typography
            variant="h6"
            className="font-semibold md:w-1/3 text-[20px] md:text-[22px]"
          >
            {steps2}
          </Typography>
          <Typography
            variant="body2"
            className="w-1/2 r-md:w-full text-[16px] md:text-[20px]"
          >
            {content2}
          </Typography>
        </div>

        <div className="flex r-md:flex-col justify-between">
          <Typography
            variant="h6"
            className="font-semibold md:w-1/3 text-[20px] md:text-[22px]"
          >
            {steps3}
          </Typography>
          <Typography
            variant="body2"
            className="w-1/2 r-md:w-full text-[16px] md:text-[20px]"
          >
            {plans}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
