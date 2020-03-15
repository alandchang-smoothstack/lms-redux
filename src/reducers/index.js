import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authorReducer from './authorReducer';

const rootReducer = combineReducers({
  bookReducer,
  authorReducer
});

export default rootReducer;
