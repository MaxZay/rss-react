import axios from 'axios'
import { Dispatch } from 'react'
import { DetailsAction, DetailsActionTypes } from '../../types/details'

export const fetchDetailsNews = (date: string, title: string) => {
  return async (dispatch: Dispatch<DetailsAction>) => {
    try {
      dispatch({ type: DetailsActionTypes.FETCH_DETAILS })
      const responce = await axios.get(
        `https://newsapi.org/v2/everything?qInTitle='${title.substring(
          1
        )}'&apiKey=00ac008fe54b42ae824e6c007fac3c70`
      )

      dispatch({
        type: DetailsActionTypes.FETCH_DETAILS_SUCCESS,
        payload: responce.data.articles,
      })
    } catch (e) {
      dispatch({
        type: DetailsActionTypes.FETCH_DETAILS_ERROR,
        payload: 'Error',
      })
    }
  }
}
