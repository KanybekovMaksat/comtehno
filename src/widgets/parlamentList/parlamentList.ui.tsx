import { CircularProgress, Container, Typography } from "@mui/material";
import { parlamentQueries } from "~entities/parlaments";
import SchoolIcon from "@mui/icons-material/School";

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
      <div className="grid grid-cols-[repeat(auto-fit,300px)] gap-6">
        {parlamentsData.map((parlament, index) => (
          <div key={index} className="relative inline-block">
            <SchoolIcon
              sx={{ fontSize: 100 }}
              className="absolute right-[-50px] top-[-50px] rotate-[22deg] text-primary"
            />
            <div className="bg-tundora/20 p-2 rounded-xl">
              <div
                style={{ backgroundImage: `url(${parlament.photo})` }}
                className="min-h-64 w-full bg-white rounded-tl-xl rounded-tr-xl bg-cover bg-center flex items-end"
              >
                <div className="text-xl bg-black/30 w-full text-white py-1 px-2">
                  <span className="mr-1">Должность:</span>
                  <span className="text-sun underline w-full break-words">
                    {parlament.description}
                  </span>
                </div>
              </div>
              <Typography
                className="bg-primary text-white py-1 px-2 rounded-bl-xl rounded-br-xl"
                variant="h6"
              >
                {parlament.fullName}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
