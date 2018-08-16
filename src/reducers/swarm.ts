import { ADD_HASH, ADD_SELECTED_CONTENT } from "../actions/swarm"

const initialState = {
  hashes: [],
  selectedContent: "",
}

export const swarmReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_HASH:
      return Object.assign({}, state, {
        hashes: state.hashes.concat(action.hash),
      })
    case ADD_SELECTED_CONTENT:
      return Object.assign({}, state, {
        selectedContent: action.content,
      })
    default:
      return state
  }
}
