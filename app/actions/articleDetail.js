import * as types from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getArticleDetail = (articleId) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get(`posts/${articleId}`, {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      dispatch({
        type: types.GET_ARTICLE_DETAIL,
        payload: res.data.oResult,
      });
    })
    .catch((err) => console.log(axiosHandleError(err)));
};
