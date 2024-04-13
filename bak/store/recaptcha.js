const RECAPTCHA_SECRET = '6LdhomocAAAAACpH0YVFNx1hTBbUy8j-_FTVR_Mn';
const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

const initialState = {
  loading: false,
  verified: false,
};

export const state = () => initialState;

export const mutations = {
  setLoading(state, value = true) {
    state.loading = value;
  },
  setVerified(state, value) {
    state.verified = value;
  },
};

export const actions = {
  async verify({ commit }, token) {
    try {
      commit('setLoading');
      var formData = new FormData();
      formData.append('response', token);
      formData.append('secret', RECAPTCHA_SECRET);
      const axios = this.$axios;
      axios.setBaseURL(VERIFY_URL);
      let { data } = await axios.post('', formData);
      commit('setVerified', data.succes);
    } catch (error) {
      commit('setRequestError', error, { root: true });
      commit('setLoading', false);
    }
  },
};
