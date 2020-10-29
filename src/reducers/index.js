import { combineReducers } from 'redux';
import artistReducer from './artistReducer'

const rootReducer = combineReducers({
  artist: artistReducer
})

export default rootReducer