import { combineReducers } from 'redux'
import spells from './spells'
import history from './history'
import header from './header'

export default combineReducers({ spells, history, header });