import { useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const items = [
  {
    title: "aboutPage.mission",
    content: "aboutPage.missionContent",
  },
  {
    title: "aboutPage.values",
    content: "aboutPage.valuesContent",
  },
  {
    title: "aboutPage.vision",
    content: "aboutPage.visionContent",
  },
];

export const AboutAccordion = () => {
  const [selected, setSelected] = useState<number | null>(0);
  const { t } = useTranslation();

  return (
    <Container className="r-sm:mb-20 mb-[150px] max-w-[1440px] r-md:mb-8">
      <Typography className="mb-4 text-[#18181B] font-light text-5xl r-sm:text-[32px]">
        {t('aboutPage.knowledgeToAction')}
      </Typography>
      <div className="flex gap-8 items-start r-md:flex-col w-full">
        <div className="w-1/2 r-md:w-full">
          <Box className="flex flex-col gap-2">
            {items.map((item, index) => (
              <div key={index}>
                <button
                  className={clsx(
                    "text-left font-light transition-colors w-full p-2 text-4xl r-sm:text-[32px]",
                    selected === index
                      ? "text-[#0F766E] border-l-4 border-l-[#0F766E]"
                      : "text-gray-500"
                  )}
                  onClick={() => setSelected(index === selected ? null : index)}
                >
                  {t(item.title)}
                </button>

                <div
                  className={clsx(
                    "transition-all duration-300 ease-in-out overflow-hidden w-full ",
                    selected === index ? "h-36 opacity-100" : "h-0 opacity-0"
                  )}
                >
                  <div className="h-36 p-4  rounded-md shadow-sm scrollbar-thin">
                    <Typography className="text-[#18181B] text-2xl r-sm:text-[18px] font-light">
                      {t(item.content)}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </Box>
        </div>

        <div className="w-1/2 r-md:w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/53b4/50bb/57b51602d51737fbe7a29c27fafdf36e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t858Q3Sd7OHKpjq2D-fqZ2FbGgKzx2lX-YmqUY0PF6AZkh7UNCmuZabBuSvabTdiS9e9A4M6ZWNqaMA5J2-b6tCa57-BrpOBrpoCqGUo0bfkJJWLQCQkT2C7sBSDR6CWM~sqcyu6mdcCrRJVYsDRRNy~tVytWIbppusOTTU~dhcilQy6QOYvzjSgcNkjdQyF6BoQrrE0l6I7EttqZA1zCYPTggBLijywnYIiV89YGS4xNGPsVV~5dA5aVlV0iPPqJUKvR5fyUBeWAN~Nj88zXkeVoNHo76OgGOYNUPbRQH~QGTbEPSEiHFAarYIRu-cZkTrxZW4p26iaglX6U7WI5w__"
            alt="Здание"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </Container>
  );
};
