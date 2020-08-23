import { createStore, combineReducers } from 'redux'
import scoreReducer from './reducers/scoreReducer'
import wordReducer from './reducers/wordReducer'
import gameModeReducer from './reducers/gameModeReducer'


const reducer = combineReducers({
    score: scoreReducer,
    word: wordReducer,
    gameMode : gameModeReducer
  })

const store = createStore(reducer)

export default store