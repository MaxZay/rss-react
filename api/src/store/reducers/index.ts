import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { detailsReducer } from './detailsReducer'

export const rootReducer = combineReducers({
  news: dataReducer,
  details: detailsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
