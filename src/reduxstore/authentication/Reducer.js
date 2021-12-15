import { IS_ALREADY_SIGNIN, SIGNUP, SIGNIN, SIGNOUT } from "./ActionType";

const initialState = {
  isLoading: true,
  isAuthenticate: false,
  hasError: false,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_ALREADY_SIGNIN:
      return { ...state, isLoading: false, isAuthenticate: action.result };
    case SIGNIN:
      return {
        ...state,
        isLoading: false,
        isAuthenticate: action.result,
        hasError: !action.result,
      };
    case SIGNUP:
      return { ...state, isLoading: false, isAuthenticate: action.result };
    case SIGNOUT:
      return { ...state, isLoading: false, isAuthenticate: false };
    default:
      return state;
  }
};
