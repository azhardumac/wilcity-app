import { SET_LOCALE } from "../constants/actionTypes";
import { locale } from "../hsblog/utils/functions/getCurrentLocale";

export const setLocale = (localeParam) => (dispatch, getState) => {
  const { WPML } = getState().settings;

  let {lang, defaultLang} = {};
  if (!!WPML) {
    lang = WPML.lang;
    defaultLang = WPML.defaultLang;
  }

  return new Promise(resolve => {
    dispatch({
      type: SET_LOCALE,
      payload: {
        locale: !!lang[localeParam] ? localeParam : (!!lang[locale] ? locale : defaultLang),
      },
    });
    resolve();
  })
};
