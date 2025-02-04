import { CalendarMonth } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { TrainingProgramList } from "~features/trainingProgramAccordion";

export const TrainingProgram: React.FC = () => {
  return <>
    <Typography variant="h2" className="mb-4 font-light text-[44px]">Программа обучения</Typography>
    <Stack direction={"row"} spacing={4} className="mb-4 text-[#52525B]">
      <div className="flex items-center gap-2">
        <CalendarMonth />
        <Typography variant="caption" className="text-xl" >2 года 10 месяцев</Typography>
      </div>
      <div className="flex items-center gap-2">
        <WorkOutlineIcon />
        <Typography variant="caption" className="text-xl" >10+ практических работ в портфолио</Typography>
      </div>
    </Stack>
    <TrainingProgramList />
  </>;
};  