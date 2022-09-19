import * as types from "../constants/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getTabNavigator = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  return axios
    .get("navigators/tabNavigator", {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      const payload = res.data.oResults.filter(
        (item) => item.status === "enable"
      );
      dispatch({
        type: types.GET_TAB_NAVIGATOR,
        payload,
      });
    })
    .catch((err) => console.log(axiosHandleError(err)));
};

export const getStackNavigator = (_) => (dispatch, getState) => {
  const { locale, settings } = getState();
  dispatch({
    type: types.MENU_REQUEST_TIMEOUT,
    isTimeout: false,
  });
  return axios
    .get("navigators/stackNavigator", {
      params: getLangParam(locale, settings),
    })
    .then((res) => {
      const payload = res.data.oResults.filter(
        (item) => item.status === "enable"
      );
      dispatch({
        type: types.GET_STACK_NAVIGATOR,
        payload,
      });
      dispatch({
        type: types.MENU_REQUEST_TIMEOUT,
        isTimeout: false,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.MENU_REQUEST_TIMEOUT,
        isTimeout: true,
      });
      console.log(axiosHandleError(err));
    });
};
