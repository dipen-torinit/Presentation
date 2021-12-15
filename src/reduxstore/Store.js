import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authenticationReducer } from "./authentication/Reducer";
import { usersReducer } from "./users/Reducer";

const reducer = combineReducers({
  authenticationReducer: authenticationReducer,
  usersReducer: usersReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
