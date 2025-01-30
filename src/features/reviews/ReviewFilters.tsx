import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";

export const ReviewFilters: React.FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [role, setRole] = useState<string>("frontend");

  return (
    <div className="flex justify-center items-center mb-6 gap-4 w-[85vw]">
      <Accordion
        className="w-[280px] rounded-full text-[19px] bg-[#F4F4F5] shadow-md relative"
        sx={{
          "&::before": { display: "none" },
          "&.Mui-expanded": { margin: "0" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="h-12 flex items-center rounded-full px-4 "
          sx={{ minHeight: "48px", "&.Mui-expanded": { minHeight: "48px" } }}
        >
          {role === "frontend" ? "Frontend разработчик" : "Backend разработчик"}
        </AccordionSummary>
        <AccordionDetails className="p-0 bg-white rounded-xl absolute z-10">
          <div
            className="cursor-pointer px-4 py-3 hover:bg-gray-200 rounded-t-xl"
            onClick={() => setRole("frontend")}
          >
            Frontend разработчик
          </div>
          <div
            className="cursor-pointer px-4 py-3 hover:bg-gray-200 rounded-b-xl"
            onClick={() => setRole("backend")}
          >
            Backend разработчик
          </div>
        </AccordionDetails>
      </Accordion>

      <div className="relative bg-[#F4F4F5] rounded-full p-1 flex shadow-md">
        <div
          className={`absolute bg-white rounded-full transition-all duration-300 ease-in-out`}
          style={{
            width: "calc(50% - 8px)",
            height: "85%",
            left: tabValue === 0 ? 0 : "50%",
          }}
        />
        {["Студенты", "Выпускники"].map((label, index) => (
          <button
            key={index}
            onClick={() => setTabValue(index)}
            className={clsx(
              "px-6 py-2 rounded-full text-[19px] transition-all duration-300 ease-in-out",
              tabValue === index ? "font-medium" : "text-gray-500"
            )}
            style={{ position: "relative", zIndex: 1 }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
