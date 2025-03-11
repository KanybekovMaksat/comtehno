import { CircularProgress, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { newsQueries } from "~entities/news";
import { reviewsQuery } from "~entities/reviews";
import { Sidebar } from "~features/sidebar";
import { BackButton } from "~shared/ui/back";
import { ReviewsDetails } from "~widgets/reviews";

export const ReviewDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: reviewData,
    isError: reviewError,
    isLoading: reviewLoading,
  } = reviewsQuery.useGetReviewsDetail(slug);

  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews();

  if (isLoading || reviewLoading) {
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );
  }

  if (isError || reviewError) {
    return (
      <Typography className="text-center text-2xl" variant="h1">
        Ошибка при загрузке данных
      </Typography>
    );
  }

  return (
    <Container className="max-w-[1440px]">
      <BackButton />
      <div className="flex justify-between">
        <ReviewsDetails {...reviewData.data} />
        <Sidebar data={newsListData?.data} title={"Новости"} pathKey={"news"} />
      </div>
    </Container>
  );
};
