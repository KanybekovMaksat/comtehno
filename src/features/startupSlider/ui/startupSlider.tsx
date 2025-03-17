import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { StartupSlide } from "./starupSlide";
import { projectsQueryes } from "~entities/projects";
import { ProjectSchema } from "~entities/projects/projects.types";
import { CircularProgress, Typography } from "@mui/material";

export const StartupSlider: React.FC = () => {
  const {
    data: projectsData,
    isError: projectsDataError,
    isLoading: projectsDataLoading,
  } = projectsQueryes.useGetProjects();

  if (projectsDataLoading || !projectsData) {
    return (
      <div className="m-auto">
        <CircularProgress />
      </div>
    );
  }

  if (projectsDataError) {
    return (
      <Typography className="text-center text-2xl" variant="h1">
        Ошибка при загрузке данных
      </Typography>
    );
  }

  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      pagination={{ clickable: true }}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {projectsData?.length ? (
        projectsData.map((project: ProjectSchema, id: number) => (
          <SwiperSlide key={id}>
            <StartupSlide {...project} />
          </SwiperSlide>
        ))
      ) : (
        <div>нет данных</div>
      )}
    </Swiper>
  );
};
