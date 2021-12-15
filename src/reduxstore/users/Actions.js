import { GET_USER, LOADING } from "./ActionType";
import UserAPI from "../../api/UserAPI";

export const getUsers = (pagenumber) => {
  return function (dispatch) {
    dispatch({
      type: LOADING,
    });

    UserAPI.get(`?page=${pagenumber}`)
      .then((response) => {
        dispatch({
          type: GET_USER,
          users: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USER,
          users: [],
        });
      });
  };
};
