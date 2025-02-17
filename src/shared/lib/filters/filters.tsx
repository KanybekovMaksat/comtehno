import { Button, Typography } from "@mui/material";
import { useFilters } from "./useFilters";
import { Link } from "react-router-dom";

export const Filters = () => {
  const { setActiveFilter, activeFilter, filteredList, filters } = useFilters();

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {filters.map((filter, index) => (
          <Button
            key={index}
            onClick={() => setActiveFilter(filter.category)}
            className={`gap-2 border border-solid border-[#E4E4E7] px-4 transition-colors duration-300 normal-case rounded-[12px] text-black font-normal text-base
        ${
          activeFilter === filter.category
            ? "bg-black text-white"
            : "hover:bg-black hover:text-white"
        }`}
            sx={{ whiteSpace: "nowrap", height: "36px", minWidth: "unset" }}
          >
            {filter.title}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {filteredList.map((card, index) => (
          <div key={index}>
            <Link to={card.slug}>
              <img
                className="mb-4 w-[464px] h-[260px]"
                src={card.image}
                alt="img"
              />
            </Link>
            <Typography className="text-[22px]" variant="caption">
              {card.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
