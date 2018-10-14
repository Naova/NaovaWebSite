import { LOCALE_SET } from "../types/locale";

export function localeSet(lang) {
    return {
        type: LOCALE_SET,
        lang
    }
}

export function setLocale(lang){
    return dispatch => {
        localStorage.webSiteLang = lang;
        dispatch(localeSet(lang));
    }
}