import * as types from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getEventDetail = (eventId) => async (dispatch, getState) => {
  const { locale, settings } = getState();
  try {
    const endpoint = `events/${eventId}`;
    const { data } = await axios.get(endpoint, {
      params: getLangParam(locale, settings),
    });
    if (data.status === "success") {
      dispatch({
        type: types.GET_EVENT_DETAIL,
        payload: {
          ...data.oResults,
          oAdmob: data.oAdmob ? data.oAdmob : null,
        },
      });
    } else {
      console.log(eventId);
      console.log(JSON.stringify(data));
    }
  } catch (err) {
    console.log("err ", err);
    console.log(axiosHandleError(err));
  }
};
