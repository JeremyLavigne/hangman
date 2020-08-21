import { createStore, combineReducers } from 'redux'
import scoreReducer from './reducers/scoreReducer'
import wordReducer from './reducers/wordReducer'

const reducer = combineReducers({
    score: scoreReducer,
    word: wordReducer,
  })

const store = createStore(reducer)

export default store