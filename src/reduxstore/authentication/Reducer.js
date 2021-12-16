import { LOADING } from "../users/ActionType";
import { IS_ALREADY_SIGNIN, SIGNUP, SIGNIN, SIGNOUT } from "./ActionType";

const initialState = {
  isAuthenticating: true,
  isLoading: false,
  isAuthenticate: false,
  hasError: false,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case IS_ALREADY_SIGNIN:
      return {
        ...state,
        isAuthenticating: false,
        isLoading: false,
        isAuthenticate: action.result,
      };
    case SIGNIN:
      return {
        ...state,
        isAuthenticating: false,
        isLoading: false,
        isAuthenticate: action.result,
        hasError: !action.result,
      };
    case SIGNUP:
      return {
        ...state,
        isAuthenticating: false,
        isLoading: false,
        isAuthenticate: action.result,
      };
    case SIGNOUT:
      return {
        ...state,
        isAuthenticating: false,
        isLoading: false,
        isAuthenticate: false,
      };
    default:
      return state;
  }
};
