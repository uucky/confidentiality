<template>
  <section>
    <p class="question-text">
      {{ question }}
    </p>
    <div
      v-if="questionType === 'text'"
      class="questionArea"
    >
      <input
        v-model="answer"
        class="textInput"
        placeholder="I think..."
        required
      >
      <button
        v-if="!isLastQuestion"
        type="button"
        class="btn-regular btnInQuestion"
        :disabled="!answerIsValid"
        @click="nextQuestion"
      >
        Next
      </button>
    </div>
    <div
      v-if="questionType === 'select'"
      class="questionArea"
    >
      <label
        v-for="(str, key) in options"
        :key="key"
        class="optionLabel"
      >
        <input
          v-model="answer"
          type="radio"
          name="options"
          :value="key"
        >
        <span
          class="optionText"
          for="key"
        >{{ str }}</span>
      </label>
      <button
        v-if="!isLastQuestion"
        type="button"
        class="btn-regular btnInQuestion"
        :disabled="!answerIsValid"
        @click="nextQuestion"
      >
        Next
      </button>
    </div>
    <Submit
      v-if="isLastQuestion"
      :last-answer="answer"
      :is-ready="answerIsValid"
    />
  </section>
</template>
<script>
import Submit from '../Submit';

export default {
  name: 'QuestionArea',
  components: {
    Submit,
  },
  props: {
    questionType: {
      type: String,
      default: 'text',
    },
    options: {
      type: Object,
      default: () => {},
    },
    question: {
      type: String,
      default: '',
    },
    questionLength: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      answer: '',
      isLastQuestion: false,
      textBtnDisabled: true,
    };
  },
  computed: {
    answerIsValid() {
      if (this.questionType === 'text') return this.answer.length > 0 && this.answer.length < 100;
      return !!this.answer;
    },
  },
  methods: {
    nextQuestion() {
      this.$store.commit('SET_THIS_ANSWER', { answer: this.answer });
      this.answer = '';
      this.$store.commit('INCR_QUESTIONNUM');
      if (this.$store.state.currentQuestion === this.questionLength) {
        this.isLastQuestion = true;
      }
    },
  },
};
</script>
<style scoped lang="postcss">
.questionArea {
  display: flex;
  flex-flow: row wrap;
}

.textInput {
  @apply text-sub;
  margin: 50% 0 1em 0;
  width: 100%;
  font-family: 'Work Sans', system-ui;
  outline: none;
  border-bottom: 2px solid config('colors.accent');

  &::placeholder {
    color: rgba(config('colors.sub'), 0.4)
  }
}

.optionLabel {
  @apply text-sub;
  width: 100%;
  margin: 0.5rem;
  display: inline-block;
  cursor: pointer;

  & input[type="radio"] {
    display: none;
    &:checked + span{
      &:before {
        background-color: config('colors.accent');
      }
    }
  }
}

.optionText {
  display: block;
  font-size: 1.5em;
  font-family: 'Work Sans', system-ui;
  padding: .5em 1em .5em 1.5em;
  position: relative;
  transition: all 0.25s linear;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translatey(-50%);
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 0 2px config('colors.accent');
    transition: all 0.25s linear;
  }
}

.btnInQuestion {
  margin-left: auto;
}

</style>
