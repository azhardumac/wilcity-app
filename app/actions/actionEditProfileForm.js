import { GET_PROFILE_FORM } from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getEditProfileForm = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get("get-my-profile-fields", {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      const { data } = res;
      data.status === "success" &&
        dispatch({
          type: GET_PROFILE_FORM,
          payload: data.oResults,
        });
    })
    .catch((err) => {
      console.log(axiosHandleError(err));
    });
};
