import axios from "axios";
import { mapObjectToFormData, axiosHandleError } from "../wiloke-elements";
import { POST_REVIEW, POST_REVIEW_ERROR } from "../constants/actionTypes";
import getLangParam from "../utils/getLangParam";

export const submitReview = (listingID, results, totalReviews) => async (
  dispatch, getState
) => {
  try {
    const formData = mapObjectToFormData(results);
    const { locale, settings } = getState();
    const { data } = await axios.post(`posts/${listingID}/reviews`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
      params: getLangParam(locale, settings),
    });
    const { oItem, oGeneral, msg } = data;
    if (data.status === "success") {
      dispatch({
        type: POST_REVIEW,
        payload: { oItem, oGeneral, totalReviews },
        id: listingID,
      });
      dispatch({
        type: POST_REVIEW_ERROR,
        payload: msg,
      });
    } else {
      dispatch({
        type: POST_REVIEW_ERROR,
        payload: msg,
      });
    }
  } catch (err) {
    dispatch({
      type: POST_REVIEW_ERROR,
      payload: err.message,
    });
    console.log(axiosHandleError(err));
  }
};
