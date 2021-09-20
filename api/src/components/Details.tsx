import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { DetailsCard } from './DetailsCard'

export const Details = () => {
  const { title } = useParams()
  const [details, setDetails] = useState([])
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?qInTitle='${title.substring(
        1
      )}'&from=2021-09-19&to=2021-09-20&apiKey=00ac008fe54b42ae824e6c007fac3c70`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setDetails(data.articles)
      })
      .catch(() => {
        console.log('error')
      })
  }, [title])

  return (
    <div>
      <DetailsCard details={details} />
    </div>
  )
}
