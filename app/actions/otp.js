import axios from "axios";
import * as types from "../constants/actionTypes";
import getLangParam from "../utils/getLangParam";

export const unlockOTP = (password) => async (dispatch, getState) => {
  try {
    const endpoint = "/otp/unlock-enable-otp";
    const { locale, settings } = getState();
    const { data } = await axios.post(endpoint, {
      password,
    },{
      params: getLangParam(locale, settings),
    });
    dispatch({
      type: types.UNLOCK_OTP,
      payload: data,
    });
  } catch (err) {
    console.log("unlock-otp");
    console.log(err.response);
  }
};

export const verifyOTP = (code) => async (dispatch, getState) => {
  try {
    const endpoint = "otp/enable";
    const { locale, settings } = getState();
    const { data } = await axios.post(endpoint, {
      otp_code: code,
    },{
      params: getLangParam(locale, settings),
    });

    dispatch({
      type: types.VERIFY_OTP,
      payload: data,
    });
  } catch (err) {
    console.log("verify-otp");
    console.log(err.response);
  }
};
export const resetOTP = () => (dispatch) => {
  dispatch({
    type: types.RESET_OTP,
  });
};

export const disableOTP = (password) => async (dispatch, getState) => {
  try {
    const endpoint = "/otp/disable";
    const { locale, settings } = getState();
    const { data } = await axios.post(endpoint, {
      password,
    },{
      params: getLangParam(locale, settings),
    });
    dispatch({
      type: types.DISABLE_OTP,
      payload: data,
    });
  } catch (err) {
    console.log("disable-otp");
    console.log(err.response);
  }
};
