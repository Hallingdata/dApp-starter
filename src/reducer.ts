import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { drizzleReducers } from "drizzle"
import { dataReducer } from "./reducers/data"
import { swarmReducer } from "./reducers/swarm"

const reducer = combineReducers({
  routing: routerReducer,
  ...drizzleReducers,
  data: dataReducer,
  swarm: swarmReducer,
})

export default reducer
