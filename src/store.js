import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    setNum: '2',
    answers: {},
    uid: '',
  }),
  mutations: {
    SET_ANSWER(state, { questionNum, answer }) {
      Vue.set(state.answers, questionNum, answer);
    },
    SET_UID(state, { uid }) {
      state.uid = uid;
    },
  },
  actions: {

  },
});
