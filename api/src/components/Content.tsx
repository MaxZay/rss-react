import { useEffect, useState } from 'react'
import { About } from './About'
import { Error } from './Error'
import { Search } from './Search'
import { Main } from './Main'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import '../styles/content.css'
import { Details } from './Details'

export const Content = () => {
  const location = useLocation()
  const [radioFlag, setRadioFlag] = useState({
    popularityFlag: true,
    dateFlag: false,
    titleFlag: false,
  })
  const [news, setNews] = useState([])
  const [isResponced, setIsResponced] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [isExpects, setIsExpects] = useState(false)
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
          .toLocaleLowerCase()}&from=2021-08-13&to=2021-08-13&sortBy=${sortParam}&pageSize=${
          pageInfo.pageSize
        }&page=${pageInfo.page}&apiKey=214dc9e8e8fe4b5888ec0c0ffe923188`
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
          console.log(data.articles)
        })
        .catch(() => {
          console.log('error')
        })
    }
  })

  return (
    <TransitionGroup>
      <CSSTransition timeout={1000} classNames="my-node" key={location.key}>
        <Switch location={location}>
          <Route path="/" exact>
            <div>
              <Search
                flagFunc={setIsResponced}
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
                  flagFunc={setIsResponced}
                  radioFlag={radioFlag}
                  setRadioFlag={setRadioFlag}
                  pageInfo={pageInfo}
                  setPageInfo={setPageInfo}
                />
              )}
            </div>
          </Route>
          <Route path="/about" exact component={About} />
          <Route path="/404" component={Error} />
          <Route path="/details/:title">
            <Details news={news} />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}
