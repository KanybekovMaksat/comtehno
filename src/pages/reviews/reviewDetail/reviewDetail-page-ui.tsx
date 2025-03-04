import { CircularProgress, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { newsQueries } from "~entities/news";
import { Sidebar } from "~features/sidebar";
import { useFilters } from "~shared/lib/filters/useFilters";
import { BackButton } from "~shared/ui/back";
import { ReviewsDetails } from "~widgets/reviews";

export const ReviewDetailPage: React.FC = () => {
  const { filteredList } = useFilters();
  const { slug } = useParams<{ slug: string }>();

  const reviewData = filteredList.find((e) => e.slug.toString() === slug);

  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews();

  if (isLoading) {
    return (
      <div className="m-auto">
        <CircularProgress />;
      </div>
    );
  }

  if (isError) {
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
        <ReviewsDetails {...reviewData} />
        <Sidebar data={newsListData?.data} title={"Новости"} pathKey={"news"} />
      </div>
    </Container>
  );
};
