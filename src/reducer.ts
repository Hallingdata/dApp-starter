import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { drizzleReducers } from "drizzle"
import { dataReducer } from "./reducers/data"

const reducer = combineReducers({
  routing: routerReducer,
  ...drizzleReducers,
  data: dataReducer,
})

export default reducer
