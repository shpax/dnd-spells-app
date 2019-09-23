import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers'
import history from './middleware/history'
import favorites from './middleware/favorites'

export default createStore(reducers, applyMiddleware(
  logger, history, favorites
  ));