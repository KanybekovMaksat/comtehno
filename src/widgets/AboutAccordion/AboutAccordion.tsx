import { useState } from 'react'
import { Typography, Box, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import img from './img/comtehno.png'

const items = [
  {
    title: 'aboutPage.mission',
    content: 'aboutPage.missionContent',
  },
  {
    title: 'aboutPage.values',
    content: 'aboutPage.valuesContent',
  },
  {
    title: 'aboutPage.vision',
    content: 'aboutPage.visionContent',
  },
]

export const AboutAccordion = () => {
  const [selected, setSelected] = useState<number | null>(0)
  const { t } = useTranslation()

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
                    'text-left font-light transition-colors w-full p-2 text-4xl r-sm:text-[32px]',
                    selected === index
                      ? 'text-[#0F766E] border-l-4 border-l-[#0F766E]'
                      : 'text-gray-500'
                  )}
                  onClick={() => setSelected(index === selected ? null : index)}
                >
                  {t(item.title)}
                </button>

                <div
                  className={clsx(
                    'transition-all duration-300 ease-in-out overflow-hidden w-full ',
                    selected === index ? 'h-36 opacity-100' : 'h-0 opacity-0'
                  )}
                >
                  <div className="h-36 p-4  rounded-md shadow-sm scrollbar-thin">
                    <Typography className="text-[#18181B] text-2xl r-sm:text-[18px] font-light text-justify">
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
            src={img}
            alt="Здание"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </Container>
  )
}
