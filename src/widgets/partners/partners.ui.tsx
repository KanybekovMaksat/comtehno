import { Button, Container, Typography } from '@mui/material'
import { PartnersList } from '~features/partnersList'
import { useTranslation } from 'react-i18next'
import { partnerQueries } from '~entities/partner'
import { Link } from 'react-router-dom'

export const Partners: React.FC = () => {
  const {
    data: partnerData,
    isLoading,
    isError,
  } = partnerQueries.useGetPartners()
  const { t } = useTranslation()
  if (isLoading) {
    return <div>Загрузка</div>
  }
  if (isError) {
    return <div>Ошибка</div>
  }
  return (
    <Container className="max-w-[1440px]">
      <Typography
        className="mb-4 text-center r-md:text-[28px] text-[44px] font-light"
        variant="h2"
      >
        {t('partners.title')}
      </Typography>
      <PartnersList data={partnerData.data} />
      <div className="flex justify-center">
        <Link to={`partner`}>
          <Button className="hover:bg-black hover:text-white py-2.5 px-4 text-black border rounded-full border-solid border-[#E4E4E7]">
            Перейти к Партнёрам
          </Button>
        </Link>
      </div>
    </Container>
  )
}
