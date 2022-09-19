import axios from "axios";
import { mapObjectToFormData, axiosHandleError } from "../wiloke-elements";
import { PUT_REVIEW, POST_REVIEW_ERROR } from "../constants/actionTypes";
import getLangParam from "../utils/getLangParam";

export const editReview = (listingID, reviewID, results) => async (
  dispatch, getState
) => {
  try {
    console.log({ results });
    const formData = mapObjectToFormData(results);
    const { locale, settings } = getState();
    const { data } = await axios.post(
      `posts/${listingID}/reviews/${reviewID}`,
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
        params: getLangParam(locale, settings),
      }
    );
    const { oItem, oGeneral, msg } = data;
    if (data.status === "success") {
      dispatch({
        type: PUT_REVIEW,
        payload: { oItem, oGeneral },
        id: listingID,
      });
      dispatch({
        type: POST_REVIEW_ERROR,
        payload: msg,
      });
    } else {
      const err = { message: msg };
      throw err;
    }
  } catch (err) {
    dispatch({
      type: POST_REVIEW_ERROR,
      payload: err.message,
    });
    console.log(axiosHandleError(err));
  }
};
