import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { StartupSlide } from "./starupSlide";
import { projectsQueryes, projectsTypes } from "~entities/projects";

export const StartupSlider: React.FC = () => {
  const {
    data: projectsData,
    isError: projectsError,
    isLoading: projectsLoading,
  } = projectsQueryes.useGetProjects();

  if (projectsError) <span>Error!</span>;
  if (projectsLoading) <span>Loading...</span>;

  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      pagination={{ clickable: true }}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {projectsData?.data.map(
        (projects: projectsTypes.ProjectsSchema, index: number) => (
          <SwiperSlide key={index}>
            <StartupSlide {...projects} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};
