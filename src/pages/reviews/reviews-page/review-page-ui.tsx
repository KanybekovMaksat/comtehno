import { Container } from "@mui/material";
import { Applicant } from "~widgets/applicant";
import { Review } from "~widgets/reviews";
import { Speciality } from "~widgets/speciality";

export const ReviewsPage = () => {
  return (
    <Container className="max-w-[1440px]">
      <Speciality />
      <Applicant />
      <Review />
    </Container>
  );
};
