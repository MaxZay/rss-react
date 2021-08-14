import { useEffect, useState } from 'react'
import { Main } from './Main'
import { Search } from './Search'

export const App = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=apple&from=2021-08-13&to=2021-08-13&sortBy=popularity&apiKey=214dc9e8e8fe4b5888ec0c0ffe923188'
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setNews(data)
      })
  }, [])

  return (
    <div>
      <Search />
    </div>
  )
}
