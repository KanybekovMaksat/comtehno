import { CustomCard } from "~entities/reviewsNewsCard/Card";
import { developers } from "~features/reviews/reviewsData";

export const Developers = () => {
  return (
    <div className="grid grid-cols-3 gap-y-12 gap-4 r-md:grid-cols-1 mb-[10%]">
      {developers.map((dev, index) => (
        <CustomCard key={index} {...dev} />
      ))}
    </div>
  );
};
