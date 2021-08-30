import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'

export const rootReducer = combineReducers({
  news: dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>
