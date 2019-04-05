<template>
  <div class="layout">
    <h1 class="title">
      <span class="curQuestionNum">
        {{ currentQuestion }}</span>/<span class="questionsNum">{{ questionLength }}
      </span>
    </h1>
    <QuestionArea
      :question="activeQuestion.question"
      :question-length="questionLength"
      :question-type="activeQuestion.type"
      :options="activeQuestion.options"
      class="mainArea"
    />
  </div>
</template>
<script>
import QuestionArea from './components/questions';
import questions from './questions';

export default {
  name: 'QuestionView',
  components: {
    QuestionArea,
  },
  props: {
    setNum: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    currentQuestion() {
      return this.$store.state.currentQuestion;
    },
    activeQuestion() {
      return questions[`set${this.setNum}`][`q${this.currentQuestion}`];
    },
    questionLength() {
      return Object.keys(questions[`set${this.setNum}`]).length;
    },
  },
};
</script>
<style scoped lang="postcss">
.title {
  @apply block w-full;
  font-family: 'Palanquin Dark', system-ui;
  font-weight: 500;
  font-size: 4em;
  margin-bottom: 2rem;

  line-height: 100%;
  color: rgba(config('colors.sub'), 0.5);
}

.layout {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 40em;
  min-width: 20em;
  margin: 20% auto 0;

  padding-left: 1.8rem;
  padding-right: 1.8rem;
}

.curQuestionNum {
  @apply text-accent;
}

.questionsNum {
  font-size: .75em;
}

.mainArea {
  margin: 0 auto;
}

</style>
