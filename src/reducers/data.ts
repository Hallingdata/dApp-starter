import { ADD_DATA } from "../actions/data"

const initialState = {
  dataArray: [],
}

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_DATA:
      return Object.assign({}, state, { dataArray: state.dataArray.concat(action.data) })
    default:
      return state
  }
}
