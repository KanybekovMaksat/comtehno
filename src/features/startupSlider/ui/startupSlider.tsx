import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { StartupSlide } from "./starupSlide";
import { projectsQueryes, projectsTypes } from "~entities/projects";
export const StartupSlider: React.FC = () => {

  const { data: projectsData } = projectsQueryes.useGetProjects();


  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      pagination={{ clickable: true }}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
       {projectsData?.data.map(
               (projects: projectsTypes.ProjectsSchema, id: number) => (
        <SwiperSlide key={id}>
          <StartupSlide {...projects} />
        </SwiperSlide>
      ))}
    </Swiper>
  )}