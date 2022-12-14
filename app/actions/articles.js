import * as types from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

const POSTS_PER_PAGE = 12;

export const getArticles = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  dispatch({
    type: types.LOADING,
    loading: true,
  });
  dispatch({
    type: types.ARTICLE_REQUEST_TIMEOUT,
    isTimeout: false,
  });
  return axios
    .get(`posts`, {
      params: {
        ...getLangParam(locale, settings),
        page: 1,
        postsPerPage: POSTS_PER_PAGE,
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ARTICLES,
        payload: res.data,
      });
      dispatch({
        type: types.LOADING,
        loading:
          (res.data.oResults && res.data.oResults.length > 0) ||
          res.data.status === "error"
            ? false
            : true,
      });
      dispatch({
        type: types.ARTICLE_REQUEST_TIMEOUT,
        isTimeout: false,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.ARTICLE_REQUEST_TIMEOUT,
        isTimeout: true,
      });
      console.log(axiosHandleError(err));
    });
};

export const getArticlesLoadmore = (next) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get(`posts`, {
      params: {
        page: next,
        postsPerPage: POSTS_PER_PAGE,
        ...getLangParam(locale, settings),
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_ARTICLES_LOADMORE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(axiosHandleError(err)));
};
