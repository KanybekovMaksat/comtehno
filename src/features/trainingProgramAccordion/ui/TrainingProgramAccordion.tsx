import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { courseListTypes } from "./TrainingProgramList";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transperent",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const TrainingProgramAccordion: React.FC = ({
  title,
  body,
}: courseListTypes) => {
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography className="text-3xl" component="span">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="flex gap-4 border-b-[1px] border-[#D4D4D8]">
        {body.map((card, index) => (
          <div className="rounded-2xl w-80 p-4 bg-[#F4F4F5]" key={index}>
            <Typography
              className="rounded-lg py-2 px-4 text-white bg-[#0D9488]"
              variant="caption"
            >
              {card.number}
            </Typography>
            <Typography className="text-[20px] mt-6" variant="h4">
              {card.description}
            </Typography>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
