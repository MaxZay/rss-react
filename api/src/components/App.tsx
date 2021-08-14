import { useEffect, useState } from 'react'
import { Main } from './Main'
import { Search } from './Search'

export const App = () => {
  const [news, setNews] = useState([])
  const [isResponced, setIsResponced] = useState(false)
  const [searchData, setSearchData] = useState('')

  useEffect(() => {
    if (isResponced) {
      setIsResponced(false)
      fetch(
        `https://newsapi.org/v2/everything?q=${searchData.trim()}&from=2021-08-13&to=2021-08-13&sortBy=popularity&apiKey=214dc9e8e8fe4b5888ec0c0ffe923188`
      )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data.articles)
          setNews(data.articles)
          console.log(news)
        })
    }
  })

  return (
    <div>
      <Search
        flagFunc={setIsResponced}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <Main newsData={news} />
    </div>
  )
}
