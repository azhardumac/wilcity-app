import {
  LOADING,
  GET_LISTING_BY_CAT,
  GET_LISTING_BY_CAT_LOADMORE,
} from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

const POSTS_PER_PAGE = 12;

export const getListingByCat =
  (categoryId, taxonomy, endpointAPI) => (dispatch, getState) => {
      const { locale, settings } = getState();
    dispatch({
      type: LOADING,
      loading: true,
    });
    axios
      .get(endpointAPI, {
        params: {
          ...getLangParam(locale, settings),
          page: 1,
          postsPerPage: POSTS_PER_PAGE,
          [taxonomy]: categoryId,
          isGetListingByCat: "yes",
          taxonomy,
        },
      })
      .then((res) => {
        console.log({ res });
        dispatch({
          type: GET_LISTING_BY_CAT,
          payload: res.data,
        });
        dispatch({
          type: LOADING,
          loading:
            (res.data.oResults && res.data.oResults.length > 0) ||
            res.data.status === "error"
              ? false
              : true,
        });
      })
      .catch((err) => console.log(axiosHandleError(err)));
  };

export const getListingByCatLoadmore =
  (next, categoryId, taxonomy, endpointAPI) => (dispatch, getState) => {
    const { locale, settings } = getState();
    return axios
      .get(endpointAPI, {
        params: {
            ...getLangParam(locale, settings),
          page: next,
          postsPerPage: POSTS_PER_PAGE,
          [taxonomy]: categoryId,
        },
      })
      .then((res) => {
        dispatch({
          type: GET_LISTING_BY_CAT_LOADMORE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(axiosHandleError(err)));
  };
