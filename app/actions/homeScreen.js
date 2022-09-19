import * as types from "../constants/actionTypes";
import axios from "axios";
import { axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getHomeScreen = (_) => async (dispatch, getState) => {
  const { locale, settings } = getState();
  dispatch({
    type: types.LOADING,
    loading: true,
  });
  try {
    // dispatch({
    //   type: types.HOME_REQUEST_TIMEOUT,
    //   isTimeout: false,
    // });
    const {data: homeData} = await axios.get("homepage-sections", {
      params: getLangParam(locale, settings),
    });
    console.log(datas);
    const homeDataArr = Object.keys(homeData.oData);
    const getAllPromise = (arr) => {
      return arr.map((endpoint) => {
        return axios.get(`homepage-sections/${endpoint}`, {
          params: getLangParam(locale, settings),
        });
      });
    };
    const datas = await Promise.all(getAllPromise(homeDataArr));
    const payload = datas.map((item) => item.data.oData).filter((item) => item);
    dispatch({
      type: types.GET_HOME_SCREEN,
      payload,
    });
    dispatch({
      type: types.HOME_REQUEST_TIMEOUT,
      isTimeout: false,
    });
  } catch (err) {
    dispatch({
      type: types.HOME_REQUEST_TIMEOUT,
      isTimeout: true,
    });
    console.log("homescreen", err.response);
  }
};
