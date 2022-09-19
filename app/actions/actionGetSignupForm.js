import { GET_SIGNUP_FORM } from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getSignUpForm = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get("get-signup-fields", {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      const { data } = res;
      data.status === "success" &&
        dispatch({
          type: GET_SIGNUP_FORM,
          payload: data.oFields,
        });
    })
    .catch((err) => {
      console.log(axiosHandleError(err));
    });
};
