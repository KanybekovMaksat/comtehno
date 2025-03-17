import { Container, Typography } from '@mui/material'
import { PartnersList } from '~features/partnersList'
import { useTranslation } from 'react-i18next'

export const Partners: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container className="max-w-[1440px]">
      <Typography
        className="mb-4 text-center r-md:text-[28px] text-[44px] font-light"
        variant="h2"
      >
        {t('partners.title')}
      </Typography>
      <PartnersList />
    </Container>
  )
}
