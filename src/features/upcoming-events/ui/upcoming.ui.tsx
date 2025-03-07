import React from "react";
import { useNavigate } from "react-router-dom";

interface Event {
  id: number;
  image: string;
  date: string;
  category: string;
  name: string;
  slug: string;
}

interface UpComingProps {
  data: Event[];
}

export const UpComing: React.FC<UpComingProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div style={{ borderBottom: "1px solid #E4E4E7" }} className="pb-6 mb-6">
      <h2 className="text-gray-600 text-2xl font-light leading-10 mb-2">
        Ближайшее мероприятие
      </h2>
      {data.map((el) => (
        <div
          key={el.id}
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/event/${el.slug}`)}
          onKeyDown={(e) => e.key === "Enter" && navigate(`/event/${el.slug}`)}
          className="cursor-pointer"
        >
          <img className="w-[464px] rounded-2xl" src={el.image} alt="upcoming" />
          <div className="flex gap-2 mt-4">
            <p className="text-gray-600 text-base font-normal leading-5">
              {el.date}
            </p>
            <p className="text-[#DC2626] text-base font-normal leading-5 uppercase">
              {el.category}
            </p>
          </div>
          <h3 className="text-gray-900 text-lg font-normal leading-7 mt-2">
            {el.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
