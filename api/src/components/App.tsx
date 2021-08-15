import { useEffect, useState } from 'react'
import { Main } from './Main'
import { Search } from './Search'

export const App = () => {
  const [news, setNews] = useState([])
  const [isResponced, setIsResponced] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [isExpects, setIsExpects] = useState(false)

  useEffect(() => {
    if (isResponced && searchData.length > 0) {
      setIsResponced(false)
      setIsExpects(true)
      fetch(
        `https://newsapi.org/v2/everything?q=${searchData
          .trim()
          .toLocaleLowerCase()}&from=2021-08-13&to=2021-08-13&sortBy=popularity&apiKey=214dc9e8e8fe4b5888ec0c0ffe923188`
      )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setIsExpects(false)
          setNews(data.articles)
        })
        .catch(() => {
          console.log('error')
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
      {isExpects && <h3>...загрузка</h3>}
      {!isExpects && <Main newsData={news} />}
    </div>
  )
}
