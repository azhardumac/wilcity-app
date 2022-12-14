import {
  GET_MY_NOTIFICATIONS,
  GET_MY_NOTIFICATIONS_LOADMORE,
  GET_MY_NOTIFICATION_ERROR,
  DELETE_MY_NOTIFICATION,
  DELETE_MY_NOTIFICATION_ERROR,
} from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

const POSTS_PER_PAGE = 14;

export const getMyNotifications = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get("get-my-notifications", {
      params: {
        page: 1,
        postsPerPage: 20,
        ...getLangParam(locale, settings),
      },
    })
    .then(({ data }) => {
      if (data.status === "success") {
        dispatch({
          type: GET_MY_NOTIFICATIONS,
          payload: data,
        });
      } else if (data.status === "error") {
        dispatch({
          type: GET_MY_NOTIFICATION_ERROR,
          messageError: data.msg,
        });
      }
    })
    .catch((err) => console.log(axiosHandleError(err)));
};

export const getMyNotificationsLoadmore =
  (next) => async (dispatch, getState) => {
    const { locale, settings } = getState();
    return axios
      .get("get-my-notifications", {
        params: {
          page: next,
          postsPerPage: 20,
          ...getLangParam(locale, settings),
        },
      })
      .then(({ data }) => {
        console.log({ data });
        dispatch({
          type: GET_MY_NOTIFICATIONS_LOADMORE,
          payload: {
            next: data.status === "success" ? data.next : false,
            oResults: data.status === "success" ? data.oResults : [],
          },
        });
      })
      .catch((err) => console.log(axiosHandleError(err)));
  };

export const deleteMyNotifications = (id) => (dispatch) => {
  return axios
    .delete(`delete-my-notification/${id}`)
    .then(({ data }) => {
      if (data.status === "success") {
        dispatch({
          type: DELETE_MY_NOTIFICATION,
          id,
        });
      } else if (data.status === "error") {
        dispatch({
          type: DELETE_MY_NOTIFICATION_ERROR,
          message: data.msg,
        });
      }
    })
    .catch((err) => console.log(axiosHandleError(err)));
};
