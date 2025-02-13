import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";

export const ReviewFilters: React.FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [role, setRole] = useState<string>("frontend");

  return (
    <div className="flex r-md:flex-col justify-center container items-center mb-6 gap-4 w-full  min-w-0">
      <Accordion
        className="w-[700px] r-md:w-auto rounded-full text-[16px] bg-[#F4F4F5] shadow-md relative"
        sx={{
          "&::before": { display: "none" },
          "&.Mui-expanded": { margin: "0" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="h-12 flex items-center rounded-full px-2"
          sx={{ minHeight: "48px", "&.Mui-expanded": { minHeight: "48px" } }}
        >
          {role === "frontend" ? "Frontend разработчик" : "Backend разработчик"}
        </AccordionSummary>
        <AccordionDetails className="p-0 bg-white rounded-xl absolute z-10 w-full left-0">
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

      <div className="relative bg-[#F4F4F5] rounded-full p-1 flex shadow-md  r-sm:w-auto w-[350px] r-md:w-full">
        <div
          className="absolute bg-white rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: "50%",
            height: "calc(100% - 8px)",
            top: "4px",
            left: tabValue === 0 ? "4px" : "50%",
          }}
        />
        {["Студенты", "Выпускники"].map((label, index) => (
          <button
            key={index}
            onClick={() => setTabValue(index)}
            className={clsx(
              "w-1/2 px-4 py-2 rounded-full text-[16px]  transition-all duration-300 ease-in-out relative z-10",
              tabValue === index ? "font-medium text-black" : "text-gray-500"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
