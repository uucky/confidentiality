<template>
  <div class="layout">
    <h1 class="title">
      Set{{ setNum }} Q{{ currentQuestion }}.
    </h1>
    <section>
      <div v-if="activeQuestion.type === 'text'">
        <TextQuestion :question="activeQuestion.question">
          <template v-slot:submitBtn>
            <button
              type="button"
              class="btn-regular"
              @click="nextQuestion"
            >
              Next
            </button>
          </template>
          <template v-slot:inputArea>
            <input
              v-model="answer"
              class="textInput"
              placeholder="I think..."
            >
          </template>
        </TextQuestion>
      </div>
      <div v-if="activeQuestion.type === 'select'">
        <SelectQuestion :question="activeQuestion.question">
          <template v-slot:submitBtn>
            <button
              type="button"
              class="btn-regular"
              @click="nextQuestion"
            >
              Next
            </button>
          </template>
          <template
            v-slot:inputArea
          >
            <li
              v-for="(str, key) in activeQuestion.options"
              :key="key"
              class="optionItem"
            >
              <input
                v-model="answer"
                type="radio"
                :value="key"
              >
              <label
                for="opt"
              >{{ str }}</label>
            </li>
          </template>
        </SelectQuestion>
      </div>
    </section>
  </div>
</template>
<script>
import TextQuestion from './components/questions/Text';
import SelectQuestion from './components/questions/Select';
import questions from './questions';

export default {
  name: 'QuestionView',
  components: {
    TextQuestion,
    SelectQuestion,
  },
  props: {
    setNum: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      currentQuestion: 1,
      answer: '',
    };
  },
  computed: {
    activeQuestion() {
      return questions[`set${this.setNum}`][`q${this.currentQuestion}`];
    },
    questionLength() {
      return Object.keys(questions[`set${this.setNum}`]).length;
    },
  },
  methods: {
    nextQuestion() {
      this.$store.commit('SET_ANSWER', { questionNum: this.currentQuestion, answer: this.answer });
      this.answer = '';
      if (this.currentQuestion === this.questionLength) {
        this.$router.push({ path: '/submit' });
      } else {
        this.currentQuestion += 1;
      }
    },
  },
};
</script>
<style scoped lang="postcss">
.title {
  @apply block w-full text-accent;
  font-family: 'Palanquin Dark', system-ui;
  font-size: 3.5em;
  font-weight: 500;
  margin-bottom: 2rem;

  line-height: 100%;
}


.layout {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 40em;
  margin: 20% auto 0;

  padding-left: 1.8rem;
  padding-right: 1.8rem;
}


.textInput {
  margin: 50% 0 1em 0;
  width: 100%;
  font-family: 'Work Sans', system-ui;
  outline: none;
  border-bottom: 2px solid config('colors.accent');
}

.optionItem {
  width: 100%;
}
</style>
