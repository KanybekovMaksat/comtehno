import { Box, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { newsQueries, newsTypes } from '~entities/news'
import { pathKeys } from '~shared/lib/react-router'
import { formatDate } from '~shared/ui/date'

export const NewsPage = () => {
  const { slug } = useParams()
  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = newsQueries.useGetNewsDetail(slug)
  const { data: newsListData, isLoading, isError } = newsQueries.useGetNews()
  console.log(slug)

  console.log(newsData)

  if (newsLoading || isLoading) {
    return <div>Загрузка</div>
  }
  if (newsError || isError) {
    return <div>Ошибка при получении данных</div>
  }
  return (
    <Box className="grid grid-cols-[1fr_464px] container">
      <Box>
        <Box className="flex items-center gap-[8px]">
          <Typography variant="subtitle2">
            {formatDate(newsData.data.createdAt)}
          </Typography>
          <Typography className="uppercase" variant="h6">
            {newsData.data.category.name}
          </Typography>
        </Box>
        <Typography variant="h2">{newsData.data.title}</Typography>
        <Box
          component={'img'}
          src={newsData.data.photo}
          alt={newsData.data.title}
        ></Box>
        <div dangerouslySetInnerHTML={{ __html: newsData.data.content }}></div>
      </Box>
      <Box>
        <Typography variant="h3" className="mb-[8px]">
          Новости
        </Typography>
        <Box className="flex flex-col gap-[24px]">
          {newsListData.data.map((news: newsTypes.News) => (
            <Link to={pathKeys.news.bySlug(news.slug)}>
              <Box className="flex gap-[16px]">
                <Box
                  component={'img'}
                  src={news.photo}
                  alt={news.title}
                  className="w-[220px] rounded-[8px]"
                ></Box>
                <Box>
                  <Typography>{formatDate(news.createdAt)}</Typography>
                  <Typography>{news.title}</Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
