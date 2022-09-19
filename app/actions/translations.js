import { GET_TRANSLATIONS } from "../constants/actionTypes";
import axios from "axios";
import { isEmpty, axiosHandleError } from "../wiloke-elements";
import { decodeObject } from "../utils/decodeObject";
import getLangParam from "../utils/getLangParam";

export const getTranslations = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get("translations", {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      dispatch({
        type: GET_TRANSLATIONS,
        payload: isEmpty(res.data.oResults)
          ? {}
          : decodeObject(res.data.oResults),
      });
    })
    .catch((err) => console.log(axiosHandleError(err)));
};
