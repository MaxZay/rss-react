export interface DetailsState {
  details: any[]
  loading: boolean
  error: null | string
}

export enum DetailsActionTypes {
  FETCH_DETAILS = 'FETCH_DETAILS',
  FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS',
  FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR',
}

interface FetchDetailsAction {
  type: DetailsActionTypes.FETCH_DETAILS
}

interface FetchDetailsSuccessAction {
  type: DetailsActionTypes.FETCH_DETAILS_SUCCESS
  payload: any[]
}

interface FetchDetailsErrorAction {
  type: DetailsActionTypes.FETCH_DETAILS_ERROR
  payload: string
}

export type DetailsAction =
  | FetchDetailsAction
  | FetchDetailsErrorAction
  | FetchDetailsSuccessAction
