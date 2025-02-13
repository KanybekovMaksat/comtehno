import { Typography } from "@mui/material";

export const AboutPageCards = () => {
  return (
    <div className="flex gap-4 justify-center items-center r-md:flex-col r-sm:items-center ">
      {[
        { value: "2005", label: "год основания" },
        { value: "1700", label: "студентов" },
        { value: "50 000", label: "выпускников" },
        { value: "50", label: "менторов" },
      ].map((item, index) => (
        <div key={index} className="bg-[#F4F4F5] w-[340px] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition-all">
          <Typography variant="h6" className="font-bold text-[44px] text-[#0F766E] ">
            {item.value}
          </Typography>
          <Typography variant="body2" className="text-black text-3xl font-light">
            {item.label}
          </Typography>
        </div>
      ))}
    </div>
  );
};
