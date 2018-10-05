import { createSelector } from "reselect";

const localeSelector = state => state.locale;

export const getLang = createSelector(
	localeSelector, (locale) => (locale.lang)
)