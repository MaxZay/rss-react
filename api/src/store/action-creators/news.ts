import axios from 'axios'
import { Dispatch } from 'react'
import { NewsAction, NewsActionTypes } from '../../types/news'

export const fetchNews = (
  date: string,
  sortBy: string,
  searchingString: string,
  pageSize: number,
  page: number
) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS })
      const responce = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchingString
          .trim()
          .toLocaleLowerCase()}&from=${date}&to=${date}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=214dc9e8e8fe4b5888ec0c0ffe923188`
      )
      dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: responce })
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Error' })
    }
  }
}
