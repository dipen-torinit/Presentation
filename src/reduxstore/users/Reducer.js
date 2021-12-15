import { GET_USER, LOADING } from "./ActionType";

const initialState = {
  isLoading: true,
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { isLoading: true, users: state.users };
    case GET_USER:
      state.users.forEach((element) => {
        const itemfound = action.users.find((item) => {
          return item.id === element.id;
        });

        if (itemfound === undefined) {
          action.users = action.users.concat([element]);
        }
      });
      return { isLoading: false, users: action.users };
    default:
      return state;
  }
};
