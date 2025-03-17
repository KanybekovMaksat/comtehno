import { partnerQueries } from '~entities/partner'
import { PartnersList } from '~features/partnersList'
import { Fancybox } from '~widgets/fancyapps'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import partnerImg from './img/partner-img.png'

export const PartnerPage: React.FC = () => {
  const {
    data: partnerData,
    isLoading,
    isError,
  } = partnerQueries.useGetPartners()
  const {
    data: documentData,
    isLoading: documentLoading,
    isError: documentError,
  } = partnerQueries.useGetPartnersDocuments()
  if (isLoading && documentLoading) {
    return <div>Загрузка</div>
  }
  if (isError && documentError) {
    return <div>Ошибка</div>
  }
  return (
    <div>
      <section
        className="bg-white rounded-3xl r-sm:mb-10 mb-20 r-md:mx-4 mx-6 overflow-hidden r-md:py-10 py-20"
        style={{
          background:
            'linear-gradient(121.65deg, #4D5FF5 2.13%, #5649BF 36.86%, #38E569 96%)',
        }}
      >
        <Container className="max-w-[1440px] text-white ">
          <div className="flex justify-between items-center">
            <div>
              <Typography className="text-5xl font-normal r-md:mb-2 mb-4 r-lg:text-4xl">
                Наши партнеры
              </Typography>
              <p className="r-lg:text-xl r-md:text-lg text-2xl max-w-3xl">
                Надёжные союзники, с которыми мы вместе создаём инновационные
                решения и открываем новые возможности, предоставляя студентам
                платформу для роста и развития.
              </p>
            </div>
            <img
              className="max-w-sm r-md:hidden r-lg:max-w-xs"
              src={partnerImg}
              alt="img"
            />
          </div>
        </Container>
      </section>
      <Container className="max-w-[1440px]">
        <Typography className="text-5xl font-light mb-6 max-w-4xl r-lg:text-4xl">
          Наши выпускники строят карьеру в ведущих компаниях
        </Typography>
        <PartnersList data={partnerData.data} />
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          {documentData?.data.map((acc) => (
            <Accordion
              key={acc.id}
              className="mb-4 border border-gray shadow-none rounded"
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography className="text-gray-800 font-semibold">
                  {acc.title}
                </Typography>
              </AccordionSummary>
              {acc.documentItems.map((doc, index) => (
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
    </div>
  )
}
