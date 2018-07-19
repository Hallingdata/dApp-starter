import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer"

import { generateContractsInitialState } from "drizzle"
import drizzleOptions from "./drizzleOptions"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

// Redux DevTools
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
  contracts: generateContractsInitialState(drizzleOptions),
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
