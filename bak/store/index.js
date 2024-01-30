const initialState = {
  locales: ['nl', 'en'],
  locale: 'nl',
  snackFailure: '',
  snackSuccess: '',
};

export const state = () => initialState;

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  setSnackFailure(state, snack) {
    state.snackFailure = snack;
  },
  setSnackSuccess(state, snack) {
    state.snackSuccess = snack;
  },
  setRequestError(state, message) {
    state.snackFailure = message;
  },
  setRequestSuccess(state, message) {
    state.snackSuccess = message;
  },
};

export const actions = {};
