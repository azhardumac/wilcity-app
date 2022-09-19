import { GET_PAGE } from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getPage = (pageId) => (dispatch, getState) => {
  const { locale, settings } = getState();
  axios
    .get(`pages/${pageId}`, {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: GET_PAGE,
          payload: {
            [pageId]: res.data.oResult,
          },
        });
      }
    })
    .catch((err) => console.log(axiosHandleError(err)));
};
