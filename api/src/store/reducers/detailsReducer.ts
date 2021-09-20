import {
  DetailsAction,
  DetailsActionTypes,
  DetailsState,
} from '../../types/details'

const initialState: DetailsState = {
  details: [],
  error: null,
  loading: false,
}

export const detailsReducer = (
  state = initialState,
  action: DetailsAction
): DetailsState => {
  switch (action.type) {
    case DetailsActionTypes.FETCH_DETAILS:
      return { ...state, loading: true }
    case DetailsActionTypes.FETCH_DETAILS_SUCCESS:
      return { ...state, loading: false, details: action.payload }
    case DetailsActionTypes.FETCH_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
