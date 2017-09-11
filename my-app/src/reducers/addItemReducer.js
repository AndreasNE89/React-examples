import * as actions from '../actions/addAction'
export default function count(state = [], action){
  switch (action.type) {
      case actions.ADD_ITEM:
      return [...state,
        Object.assign({}, action.count)
      ]

      case actions.REMOVE_ITEM:
      console.log(state)
      return [...state.slice(1)]

    default:
    return state
  }
}
