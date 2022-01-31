import {createStore} from 'redux'
import { todoReducer } from './todo.redux'

let store = createStore(todoReducer);

export default store;