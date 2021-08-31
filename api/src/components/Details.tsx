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

    // fetch(
    //   `https://newsapi.org/v2/everything?qInTitle='${title.substring(
    //     1
    //   )}'&from=2021-08-13&to=2021-08-13&apiKey=214dc9e8e8fe4b5888ec0c0ffe923188`
    // )
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((data) => {
    //     setDetails(data.articles)
    //   })
    //   .catch(() => {
    //     console.log('error')
    //   })
  }, [title])

  return (
    <div>
      <DetailsCard details={news} />
    </div>
  )
}
