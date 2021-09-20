import { useEffect, useState } from 'react'
import { Main } from './Main'
import { Search } from './Search'
import '../styles/app.css'

export const App = () => {
  const [news, setNews] = useState([])
  const [isResponced, setIsResponced] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [isExpects, setIsExpects] = useState(false)
  const [radioFlag, setRadioFlag] = useState({
    popularityFlag: true,
    dateFlag: false,
    titleFlag: false,
  })
  const [sortParam, setSortParam] = useState('popularity')
  const [pageInfo, setPageInfo] = useState({
    pageSize: 5,
    page: 1,
    maxPage: 20,
  })

  useEffect(() => {
    if (isResponced && searchData.length > 0) {
      setNews([])
      setIsResponced(false)
      setIsExpects(true)

      fetch(
        `https://newsapi.org/v2/everything?q=${searchData
          .trim()
          .toLocaleLowerCase()}&from=2021-09-19&to=2021-09-20&sortBy=${sortParam}&pageSize=${
          pageInfo.pageSize
        }&page=${pageInfo.page}&apiKey=00ac008fe54b42ae824e6c007fac3c70`
      )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          const res =
            data.totalResults < 100
              ? Math.ceil(data.totalResults / pageInfo.pageSize)
              : Math.ceil(100 / pageInfo.pageSize)
          setPageInfo({
            ...pageInfo,
            maxPage: res,
          })
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
        getDataLoadingFlag={setIsResponced}
        searchData={searchData}
        setSearchData={setSearchData}
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
      />
      {isExpects && <h3 className="error-line">...loading</h3>}
      {!isExpects && (
        <Main
          newsData={news}
          setSortParam={setSortParam}
          getDataLoadingFlag={setIsResponced}
          radioFlag={radioFlag}
          setRadioFlag={setRadioFlag}
          pageInfo={pageInfo}
          setPageInfo={setPageInfo}
        />
      )}
    </div>
  )
}
