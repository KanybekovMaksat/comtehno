import { CircularProgress, Container, Typography } from "@mui/material";
import { parlamentQueries } from "~entities/parlaments";

export const ParlamentList = () => {
  const {
    data: parlamentsData,
    isError: parlamentsError,
    isLoading: parlamentsLoading,
  } = parlamentQueries.useGetParlaments();

  if (parlamentsLoading || !parlamentsData)
    return (
      <div className="m-auto">
        <CircularProgress />
      </div>
    );

  if (parlamentsError) {
    return (
      <Typography className="text-center text-2xl" variant="h1">
        Ошибка при загрузке данных
      </Typography>
    );
  }
  return (
    <Container className="max-w-[1440px]">
      <div>
        {parlamentsData.map((parlament, index) => (
          <div
            key={index}
            className="max-w-80 bg-alto bg-opacity-50 p-3 rounded-xl"
          >
            <img
              className="h-56 w-full rounded-xl object-cover mb-2"
              src={parlament.photo}
              alt="photo"
            />
            <Typography
              className="bg-primary text-white py-1 px-2 rounded-xl mb-2"
              variant="h5"
            >
              {parlament.fullName}
            </Typography>
            <Typography
              className="bg-sun text-white py-1 px-2 rounded-xl"
              variant="h6"
            >
              Должность: {parlament.description}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};
