import axios from "axios";
import { axiosHandleError } from "../../wiloke-elements";
import { POST_COMMENT_IN_REVIEWS } from "../../constants/actionTypes";
import getLangParam from "../../utils/getLangParam";

export const postCommentReview = (
  reviewID,
  content,
  listingID
) => async (dispatch, getState) => {
  try {
    console.log(reviewID, content, listingID);
    const endpoint = `reviews/${reviewID}/discussions`;
    const { locale, settings } = getState();
    const { data } = await axios.post(endpoint, {
      content,
    },{
      params: getLangParam(locale, settings),
    });
    if (data.status === "success") {
      dispatch({
        type: POST_COMMENT_IN_REVIEWS,
        payload: {
          ...data,
          reviewID
        },
        id: listingID
      });
    } else {
      console.log(JSON.stringify(data));
    }
  } catch (err) {
    console.log(axiosHandleError(err));
  }
};
