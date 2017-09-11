import * as actions from './addAction'

export function addItem(count){
  return{type: actions.ADD_ITEM, count}
}
export function removeItem(count){
  return{type:actions.REMOVE_ITEM,
    count,
    message:"Item gone"
  }
}
