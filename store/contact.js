const RESOURCE = '/contact-form-7/v1/contact-forms/5/feedback';
const MAIL_SENT = 'mail_sent';
const INVALID = 'validation_failed';

const initialState = {
  feedback: null,
  status: null,
  loading: false,
};

export const state = () => initialState;

export const mutations = {
  setLoading(state, value = true) {
    state.loading = value;
  },
  setFeedback(state, value) {
    state.loading = false;
    state.feedback = value.message;
    state.status = value.status;
  },
};

export const actions = {
  async submit({ commit }, params) {
    try {
      commit('setLoading');
      let {
        data: { status, message, invalid_fields },
      } = await this.$axios.post(`${RESOURCE}`, params);
      if (status == MAIL_SENT) {
        commit('setFeedback', { message, status: 'success' });
      } else if (status == INVALID) {
        commit('setFeedback', {
          message: invalid_fields[0].message,
          status: 'danger',
        });
      }
      setTimeout(() => {
        commit('setFeedback', { message: null, status: null });
      }, 5000);
    } catch (error) {
      commit('setRequestError', error, { root: true });
      commit('setLoading', false);
    }
  },
};

export const getters = {};
