import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    setNum: '2',
    currentQuestion: 1,
    answers: {},
    uid: '',
  }),
  mutations: {
    INCR_QUESTIONNUM(state) {
      state.currentQuestion += 1;
    },
    SET_QUESTIONNUM(state, { questionNum }) {
      state.currentQuestion = questionNum;
    },
    SET_ANSWER(state, { questionNum, answer }) {
      Vue.set(state.answers, questionNum, answer);
    },
    SET_THIS_ANSWER(state, { answer }) {
      Vue.set(state.answers, state.currentQuestion, answer);
    },
    SET_UID(state, { uid }) {
      state.uid = uid;
    },
  },
  actions: {

  },
});
