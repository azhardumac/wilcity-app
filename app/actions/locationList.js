import * as types from "../constants/actionTypes";
import axios from "axios";
import he from "he";
import { zeroPad, axiosHandleError } from "../wiloke-elements";
import getLangParam from "../utils/getLangParam";

export const getLocationList =
  (postType, locationName) => (dispatch, getState) => {
    const { locale, settings } = getState();
    return axios
      .get(`taxonomies/listing-locations`, {
        params: {
          postType,
          ...getLangParam(locale, settings),
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          const locationList = [
            {
              id: "wilokeListingLocation",
              name: locationName,
              selected: true,
            },
            ...res.data.aTerms.map((item, index) => ({
              id: item.term_id,
              // name: `${he.decode(item.name)} (${zeroPad(item.count)})`,
              name: `${he.decode(item.name)}`,
              selected: false,
            })),
          ];
          dispatch({
            type: types.GET_LOCATION_LIST,
            payload: {
              [postType]: res.data.aTerms ? locationList : res.data.msg,
            },
          });
        }
      })
      .catch((err) => console.log(axiosHandleError(err)));
  };

export const changeLocationList = (locationList, postType) => (dispatch) => {
  dispatch({
    type: types.CHANGE_LOCATION_LIST,
    payload: {
      [postType]: locationList,
    },
  });
};

export const resetSelectedLocationList = (_) => (dispatch) => {
  dispatch({
    type: types.RESET_SELECTED_LOCATION_LIST,
  });
};
