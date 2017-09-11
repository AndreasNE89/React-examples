import {createStore} from 'redux'
import combined from '../reducers/combineReducer'

export default function configureStore(initialState){
  return createStore(
    combined,
    initialState
  );
}
