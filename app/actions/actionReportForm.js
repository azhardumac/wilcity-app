import { GET_REPORT_FORM, GET_REPORT_MESSAGE } from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import { Alert } from "react-native";
import getLangParam from "../utils/getLangParam";

export const getReportForm = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get("get-report-fields", {
      params: getLangParam(locale, settings),
    })
    .then(({ data }) => {
      console.log({ data });
      if (data.status === "success") {
        dispatch({
          type: GET_REPORT_FORM,
          payload: data.oResults,
        });
      } else {
        dispatch({
          type: GET_REPORT_FORM,
          payload: data.data.msg,
        });
      }
    })
    .catch((err) => console.log("error report form", err));
};

export const postReport = (postID, data) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .post("post-report", {
      postID,
      data,
    },{
      params: getLangParam(locale, settings),
    })
    .then(({ data }) => {
      dispatch({
        type: GET_REPORT_MESSAGE,
        message: data.msg,
      });
    })
    .catch((err) => console.log(axiosHandleError(err)));
};
