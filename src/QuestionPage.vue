<template>
  <div class="layout">
    <h1 class="title">
      <span class="curQuestionNum">
        {{ currentQuestion }}</span>/<span class="questionsNum">{{ questionLength }}
      </span>
    </h1>
    <SetSelection v-if="!questionSet" />
    <QuestionView
      v-if="!!questionSet"
      :question="activeQuestion.question"
      :question-length="questionLength"
      :question-type="activeQuestion.type"
      :options="activeQuestion.options"
      :is-question-real="!!activeQuestion.showcase"
      class="mainArea"
    />
  </div>
</template>
<script>
import QuestionView from './components/QuestionView';
import SetSelection from './components/SetSelection';
import questions from './questions';

export default {
  name: 'QuestionPage',
  components: {
    QuestionView,
    SetSelection,
  },
  computed: {
    questionSet() {
      return this.$store.state.questionSet;
    },
    currentQuestion() {
      return this.$store.state.currentQuestion;
    },
    activeQuestion() {
      if (!this.questionSet) return {};
      return questions[`set${this.questionSet}`][`q${this.currentQuestion}`];
    },
    questionLength() {
      if (!this.questionSet) return 15;
      return Object.keys(questions[`set${this.questionSet}`]).length;
    },
  },
  mounted() {
    if (!this.$store.state.fruit) this.$router.push('/');
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
  width: 100%;
  margin: 0 auto;
}

</style>
