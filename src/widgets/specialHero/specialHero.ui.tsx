import { CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { specialityQuery } from "~entities/speciality";
import { BackButton } from "~shared/ui/back";

export const SpecialHero: React.FC = () => {
  const { slug } = useParams();
  const {
    data: specialData,
    isLoading,
    isError,
  } = specialityQuery.useGetSpecialityDetail(slug);

  if (isLoading) {
    return (
      <div className="mx-auto">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <Typography variant="h1">Erorr 404</Typography>;
  }

  return (
    <Stack
      className="r-sm:mb-20 mb-20"
      direction={"row"}
      justifyContent={"space-between"}
    >
      <BackButton />
      <div>
        <div className="flex r-sm:gap-2 gap-4 mb-6 items-center">
          <img src={specialData?.data?.category.photo} alt="" />
          <Typography
            className="r-sm:text-[14px] text-[#0F766E] text-base"
            variant="caption"
          >
            {specialData?.data?.category.name}
          </Typography>
          <Typography className="r-sm:text-[14px] text-base" variant="caption">
            {specialData?.data?.specialty}
          </Typography>
        </div>
        <Typography
          className="r-sm:text-4xl text-[44px] uppercase mb-2"
          variant="h2"
        >
          {specialData?.data.title}
        </Typography>
        <Typography
          className="r-sm:text-lg max-w-2xl text-2xl font-light"
          variant="body1"
        >
          {specialData?.data.description}
        </Typography>
      </div>
      <img
        className="r-sm:hidden r-lg:max-w-sm r-md:max-w-xs max-w-2xl"
        src={specialData?.data.photo}
        alt=""
      />
    </Stack>
  );
};
