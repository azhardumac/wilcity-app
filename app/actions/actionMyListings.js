import {
  GET_MY_LISTINGS,
  GET_MY_LISTINGS_LOADMORE,
  GET_MY_LISTING_ERROR,
  RESET_MY_LISTING,
} from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

const POSTS_PER_PAGE = 12;

export const getMyListings =
  ({ postType, postStatus }) => (dispatch, getState) => {
    const { locale, settings } = getState();
    return axios
      .get("get-my-listings", {
        params: {
          postType,
          postStatus,
          page: 1,
          postsPerPage: POSTS_PER_PAGE,
          ...getLangParam(locale, settings),
        },
      })
      .then((res) => {
        console.log(res);
        const { data } = res;
        if (data.status === "success") {
          dispatch({
            type: GET_MY_LISTINGS,
            payload: data,
          });
        } else if (data.status === "error") {
          dispatch({
            type: GET_MY_LISTING_ERROR,
            messageError: data.msg,
          });
        }
      })
      .catch((err) => console.log(axiosHandleError(err)));
  };

export const getMyListingsLoadmore = ({ next, postType, postStatus }) => async (dispatch, getState) => {
    const { locale, settings } = getState();
    return axios
      .get("get-my-listings", {
        params: {
          postType,
          postStatus,
          page: next,
          postsPerPage: POSTS_PER_PAGE,
          ...getLangParam(locale, settings),
        },
      })
      .then(({ data }) => {
        data.status === "success" &&
          dispatch({
            type: GET_MY_LISTINGS_LOADMORE,
            payload: data,
          });
      })
      .catch((err) => console.log(axiosHandleError(err)));
  };
export const resetMyListing = () => (dispatch) => {
  console.log("reset");
  dispatch({
    type: RESET_MY_LISTING,
  });
};

