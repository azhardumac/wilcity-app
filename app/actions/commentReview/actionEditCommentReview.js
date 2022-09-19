import axios from "axios";
import { axiosHandleError } from "../../wiloke-elements";
import { EDIT_COMMENT_IN_REVIEWS } from "../../constants/actionTypes";
import getLangParam from "../../utils/getLangParam";

export const editCommentReview = (
  reviewID,
  commentID,
  content
) => async (dispatch, getState) => {
  try {
    const endpoint = `reviews/${reviewID}/discussions/${commentID}`;

    const { locale, settings } = getState();
    const { data } = await axios.put(endpoint, {
      content
    },{
      params: getLangParam(locale, settings),
    });
    if (data.status === "success") {
      dispatch({
        type: EDIT_COMMENT_IN_REVIEWS,
        payload: { commentID, content }
      });
    } else {
      console.log(JSON.stringify(data));
    }
  } catch (err) {
    console.log(axiosHandleError(err));
  }
};
