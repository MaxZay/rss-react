import { IinitialState, NewsAction, NewsActionTypes } from '../../types/news'

const initialState: IinitialState = {
  news: [],
  error: null,
  loading: false,
}

export const dataReducer = (
  state = initialState,
  action: NewsAction
): IinitialState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { loading: true, error: null, news: [] }
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return { loading: false, error: null, news: action.payload }
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { loading: false, error: action.payload, news: [] }
    default:
      return state
  }
}
