import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { fetchDetailsNews } from '../store/action-creators/news'
import { DetailsCard } from './DetailsCard'

export const Details = () => {
  const { title } = useParams()
  const temp = new Date()
  const dateStr = `${temp.getFullYear()}-${
    temp.getMonth() + 1
  }-${temp.getDate()}`
  const { news } = useTypeSelector((state) => state.news)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDetailsNews(dateStr, title))
  }, [title])

  return (
    <div>
      <DetailsCard details={news} />
    </div>
  )
}
