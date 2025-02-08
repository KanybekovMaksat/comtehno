import { CourseInfoContact } from "~entities/courseInfoContact/courseInfoContact";

export const Support: React.FC = () => {
  return <div className="max-w-full w-[586px] p-6 sm:p-6 bg-[#0D9488] rounded-2xl flex flex-col gap-4">
    <h1 className="text-white r-sm:text-2xl r-lg:text-3xl text-[44px] mb-5">
      Что-то случилось? Свяжитесь с нами
    </h1>
    <CourseInfoContact />
  </div>
};