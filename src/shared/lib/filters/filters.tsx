import { Button, TextField, Typography } from "@mui/material";
import { useFilters } from "./useFilters";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export const Filters: React.FC = () => {
  const {
    setActiveFilter,
    activeFilter,
    setSearchQuery,
    searchQuery,
    filteredList,
    data,
  } = useFilters();

  return (
    <div>
      <div className="flex">
        <div className="flex flex-wrap gap-2 mb-6">
          {data.filter.map((filter, index) => (
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
        <TextField
          fullWidth
          placeholder="Поиск студента"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: "342px",
            height: "40px",
            background: "#F4F4F5",
            border: "1px solid #D4D4D8",
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              padding: "8px 16px",
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
            },
          }}
          InputProps={{
            sx: {
              "& input": { padding: "0px 10px" },
            },
            startAdornment: (
              <span style={{ marginRight: "8px" }}>
                <SearchIcon />
              </span>
            ),
          }}
        />
      </div>
      <div className="flex flex-wrap gap-6">
        {filteredList.map((card, index) => (
          <div key={index}>
            <Link to={card.slug}>
              <img
                className="rounded-lg mb-4 w-[440px] h-[260px]"
                src={card.image}
                alt="img"
              />
            </Link>
            <div className="flex gap-2 text-[#52525B]">
              <span>{card.date}</span>
              <span>{card.category}</span>
            </div>
            <Typography className="text-[22px]" variant="caption">
              {card.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
