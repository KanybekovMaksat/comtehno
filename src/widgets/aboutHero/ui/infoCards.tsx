import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const AnimatedCounter: React.FC<{ targetValue: number }> = ({ targetValue }) => {
  const { ref, inView } = useInView({ triggerOnce: true }) // Отслеживаем появление элемента
  const [count, setCount] = useState(0)

  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (inView) {
      springValue.set(targetValue)
    }
  }, [inView, springValue, targetValue])

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setCount(Math.round(latest))
    })
    return () => unsubscribe()
  }, [springValue])

  return <span ref={ref}>{count}</span>
}

export const AboutPageCards = () => {
  const { t } = useTranslation();

  const cards = [
    { value: 2005, label: t('aboutPage.cards.founded') },
    { value: 1700, label: t('aboutPage.cards.students') },
    { value: 5000, label: t('aboutPage.cards.graduates') },
    { value: 50, label: t('aboutPage.cards.mentors') },
  ]

  return (
    <div className="flex gap-4 justify-center items-center r-md:flex-col r-sm:items-center">
      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-[#F4F4F5] w-[340px] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition-all"
        >
          <Typography
            variant="h6"
            className="font-bold r-md:text-[32px] text-[44px] text-[#0F766E]"
          >
            <AnimatedCounter targetValue={item.value} />
          </Typography>
          <Typography
            variant="body2"
            className="text-black text-3xl font-light"
          >
            {item.label}
          </Typography>
        </div>
      ))}
    </div>
  );
};
