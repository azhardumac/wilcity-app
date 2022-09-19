import { GET_LISTING_STATUS, GET_EVENT_STATUS } from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

const getStatus = (allText) => (dispatch, getState) => (endpoint, type) => {
  const { locale, settings } = getState();
  return axios
    .get(endpoint, {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      const { data } = res;
      data.status === "success" &&
        dispatch({
          type,
          payload: [
            {
              id: "all",
              name: allText,
              selected: true,
            },
            ...data.oResults.map((item) => ({
              id: item.post_status,
              name: `${item.status} (${item.total})`,
              selected: false,
            })),
          ],
        });
    })
    .catch((err) => console.log(axiosHandleError(err)));
};

export const getListingStatus = (allText) => (dispatch, getState) => {
  return getStatus(allText)(dispatch, getState)("get-listing-status", GET_LISTING_STATUS);
};

export const getEventStatus = (allText) => (dispatch, getState) => {
  return getStatus(allText)(dispatch, getState)("get-event-status", GET_EVENT_STATUS);
};
