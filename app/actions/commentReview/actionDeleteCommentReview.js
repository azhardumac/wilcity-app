import axios from "axios";
import { axiosHandleError } from "../../wiloke-elements";
import { DELETE_COMMENT_IN_REVIEWS } from "../../constants/actionTypes";
import getLangParam from "../../utils/getLangParam";

export const deleteCommentReview = (
  reviewID,
  commentID,
  listingID
) => async (dispatch, getState) => {
  try {
    const endpoint = `reviews/${reviewID}/discussions/${commentID}`;
    const { locale, settings } = getState();
    const { data } = await axios.delete(endpoint,{
      params: getLangParam(locale, settings),
    });
    if (data.status === "success") {
      dispatch({
        type: DELETE_COMMENT_IN_REVIEWS,
        payload: {
          reviewID,
          commentID,
          countDiscussions: data.countDiscussions
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
