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
      )}'&from=2021-08-13&to=2021-08-13&apiKey=214dc9e8e8fe4b5888ec0c0ffe923188`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)

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
