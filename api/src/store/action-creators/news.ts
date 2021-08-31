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
          .toLocaleLowerCase()}&from=${date}&to=${date}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=00ac008fe54b42ae824e6c007fac3c70`
      )

      dispatch({
        type: NewsActionTypes.FETCH_NEWS_SUCCESS,
        payload: responce.data.articles,
      })
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Error' })
    }
  }
}

export const fetchDetailsNews = (date: string, title: string) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS })
      const responce = await axios.get(
        `https://newsapi.org/v2/everything?qInTitle='${title.substring(
          1
        )}'&apiKey=00ac008fe54b42ae824e6c007fac3c70`
      )

      dispatch({
        type: NewsActionTypes.FETCH_NEWS_SUCCESS,
        payload: responce.data.articles,
      })
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Error' })
    }
  }
}
