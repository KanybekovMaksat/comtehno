import { CustomCard } from "~entities/reviewsNewsCard/Card";
import { developers } from "~features/reviews/reviewsData";

export const Developers = () => {
    return (
      <div className="grid grid-cols-3 gap-4 r-md:grid-cols-1">
        {developers.map((dev, index) => (
          <CustomCard key={index} {...dev} />
        ))}
      </div>
    );
  };