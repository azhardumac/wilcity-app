import { GET_ACCOUNT_NAV } from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getAccountNav = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();

  return axios
    .get("get-dashboard-navigator", {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      const { data } = res;
      data.status === "success" &&
        dispatch({
          type: GET_ACCOUNT_NAV,
          payload: data.oResults,
        });
    })
    .catch((err) => {
      console.log(axiosHandleError(err));
    });
};
