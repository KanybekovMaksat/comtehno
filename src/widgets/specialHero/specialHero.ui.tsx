import { CircularProgress, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { specialityQuery } from "~entities/speciality";

export const SpecialHero: React.FC = () => {
  const { slug } = useParams()
  const { data: specialData, isLoading, isError } = specialityQuery.useGetSpecialityDetail(slug)
  
  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return <Typography variant="h1">Erorr 404</Typography>
  }
  
  return (
    <Stack className="mt-10 mb-36" direction={"row"} justifyContent={"space-between"}>
      <div>
        <div className="flex gap-4 mb-6 items-center">
          <img src={specialData?.data?.category.photo} alt="" />
          <Typography className="text-[#0F766E] text-base" variant="caption">{specialData?.data?.category.name}</Typography>
          <Typography className="text-base" variant="caption">{specialData?.data?.specialty}</Typography>
        </div>
        <Typography className="text-[44px] uppercase mb-2" variant="h2">{specialData?.data.title}</Typography>
        <Typography className="max-w-2xl text-2xl font-light" variant="body1">{specialData?.data.description}</Typography>
      </div>
      <img className="max-w-2xl" src={specialData?.data.photo} alt="" />
    </Stack>
  )
};