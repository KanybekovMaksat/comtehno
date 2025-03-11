import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { StartupSlide } from "./starupSlide";
import { projectsQueryes } from "~entities/projects";
import { ProjectSchema } from "~entities/projects/projects.types";

export const StartupSlider: React.FC = () => {
  const {
    data: projectsData,
    isError: projectsDataError,
    isLoading: projectsDataLoading,
  } = projectsQueryes.useGetProjects();

  if (projectsDataLoading) return <div>Загрузка...</div>;
  if (projectsDataError) return <span>Нет результатов</span>;

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
