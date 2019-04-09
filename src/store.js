import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    questionSet: '',
    currentQuestion: 0,
    answers: {},
    uid: '',
    fruit: '',
    allowToAnswer: false,
  }),
  mutations: {
    SET_FRUIT(state, { fruit }) {
      state.fruit = fruit;
    },
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
    SET_QUESTIONSET(state, { setNum }) {
      state.questionSet = setNum;
    },
    SET_ALLOWTOANSWER(state, { status }) {
      state.allowToAnswer = status;
    },
  },
  actions: {

  },
});
