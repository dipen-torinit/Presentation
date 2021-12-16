import { IS_ALREADY_SIGNIN, SIGNUP, SIGNIN, SIGNOUT } from "./ActionType";
import {
  SIGNIN_SUCESSFULL,
  LOGINID,
  PASSWORD,
  LOGINCHECK_TIMEOUT,
  SIGNUP_TIMEOUT,
  SIGNIN_TIMEOUT,
} from "../../common/Const";
import { getValueSynch, setValue, setValueSynch } from "../../common/Storage";
import { LOADING } from "../users/ActionType";

export const checkIfAlreadySignIn = () => {
  return function (dispatch) {
    setTimeout(function () {
      (async () => {
        const value = await getValueSynch(SIGNIN_SUCESSFULL);
        const success = value !== null && value === "true";
        dispatch({
          type: IS_ALREADY_SIGNIN,
          result: success,
        });
      })();
    }, LOGINCHECK_TIMEOUT);
  };
};

export const signUp = ({ username, password }) => {
  return function (dispatch) {
    dispatch({
      type: LOADING,
    });

    setTimeout(function () {
      (async () => {
        await setValueSynch(LOGINID, username);
        await setValueSynch(PASSWORD, password);
        await setValueSynch(SIGNIN_SUCESSFULL, "true");
        dispatch({
          type: SIGNUP,
          result: true,
        });
      })();
    }, SIGNUP_TIMEOUT);
  };
};

export const signIn = ({ username, password }) => {
  return function (dispatch) {
    dispatch({
      type: LOADING,
    });
    setTimeout(function () {
      (async () => {
        const uname = await getValueSynch(LOGINID);
        const pwd = await getValueSynch(PASSWORD);

        const isSucceed = username === uname && password === pwd;

        await setValueSynch(SIGNIN_SUCESSFULL, isSucceed ? "true" : "false");
        dispatch({
          type: SIGNIN,
          result: isSucceed,
        });
      })();
    }, SIGNIN_TIMEOUT);
  };
};

export const signOut = () => {
  return function (dispatch) {
    setValue(SIGNIN_SUCESSFULL, "false", () => {
      dispatch({
        type: SIGNOUT,
      });
    });
  };
};
