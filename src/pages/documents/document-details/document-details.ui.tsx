import { Link, useParams } from "react-router-dom";
// import { documentQueries } from '~entities/document'
// import Fancybox from '~widgets/diplom-list/Fancybox'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { documentQueries } from "~entities/document";
import { Fancybox } from "~widgets/fancyapps";

export const DocumentDetailsPage = () => {
  const { slug } = useParams();

  const {
    data: documentData,
    isError,
    isLoading,
  } = documentQueries.useGetDetailsDocuments(slug);

  if (isError) {
    return <div>Произошла Ошибка</div>;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-[400px]">
        <CircularProgress className="text-blue" />
        <Typography variant="h6">Загрузка</Typography>
      </div>
    );
  }

  return (
    <Container className="max-w-[1440px] py-10">
      <Typography
        variant="h2"
        className="font-semibold text-center mb-8 text-gray-800"
        style={{ fontSize: "clamp(1rem, 5vw, 2rem)" }}
      >
        {documentData?.data.title}
      </Typography>
      <div
        className="my-10 text-base text-start"
        dangerouslySetInnerHTML={{ __html: documentData?.data.content }}
      ></div>
      <div className="flex flex-wrap r-md:gap-3 gap-5 items-center mb-10">
        {documentData?.data.childPages.map((card, index: number) => (
          <Link
            to={`/document/${card.slug}`}
            className="shadow-[0px_0px_24px_0px_#E4E8F0] r-md:p-2 p-4 r-md:rounded-lg rounded-2xl max-w-2xl flex r-md:gap-2 gap-5 items-center cursor-pointer active:scale-95 hover:scale-105 transition-all"
            key={index}
          >
            <div>
              <Typography className="r-md:text-base text-xl mb-2" variant="h3">
                {card?.title}
              </Typography>
              <Typography
                className="r-md:text-sm text-base text-dove"
                variant="subtitle1"
              >
                {card?.subtitle}
              </Typography>
            </div>
            <img
              className="r-md:max-w-24 max-w-50 r-md:h-20 h-40"
              src={card.photo}
              alt=""
            />
          </Link>
        ))}
      </div>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        {documentData?.data.documentCollections.map((acc, index) => (
          <Accordion
            key={index}
            className="mb-4 border border-gray shadow-none rounded"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="text-gray-800 font-semibold">
                {acc.name}
              </Typography>
            </AccordionSummary>
            {acc.documentCollectionItems.map((doc, index) => (
              <AccordionDetails key={index}>
                <li key={index} className="mb-2">
                  <a
                    data-fancybox="gallery"
                    href={doc.document}
                    className="text-blue hover:text-blue-700"
                  >
                    {doc.name || `Открыть документ ${index + 1}`}
                  </a>
                </li>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Fancybox>
    </Container>
  );
};
