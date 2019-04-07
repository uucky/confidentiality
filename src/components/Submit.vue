<template>
  <div class="layout">
    <p
      v-if="isSubmitting"
      class="submitStatus"
      :class="{failure: status === 'failed'}"
    >
      {{ submitMsg[status] }}
      {{ error }}
    </p>
    <div
      class="button-container"
    >
      <button
        type="button"
        class="btn-regular-submit"
        :disabled="!isReady || isSubmitting"
        @click="submitData"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script>
import { guestCollection } from '@/utils/firebase';

export default {
  name: 'Submit',
  props: {
    isReady: {
      type: Boolean,
      default: false,
    },
    lastAnswer: {
      type: String,
      default: '',
    },
    questionIsReal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      status: 'ready',
      error: null,
      isSubmitting: false,
      submitMsg: {
        submitting: 'Submitting...',
        failed: 'Bad Internet, try again?',
        success: 'Successfully submitted.',
      },
    };
  },
  methods: {
    saveLastAnswer() {
      if (this.questionIsReal) this.$store.commit('SET_THIS_ANSWER', { answer: this.lastAnswer });
    },
    async submitData() {
      this.saveLastAnswer();
      this.isSubmitting = true;
      this.status = 'submitting';
      const {
        questionSet, answers, uid, fruit,
      } = this.$store.state;
      try {
        const timestamp = new Date();
        await guestCollection.add({
          questionSet, answers, uid, fruit, timestamp,
        });
        this.status = 'success';
      } catch (e) {
        this.status = 'failed';
        this.error = e.message;
      }
    },
  },
};
</script>
<style scoped lang="postcss">
.button-container {
  width: 100%;
  text-align: center;
  margin-bottom: 2em;
}

.submitStatus {
  text-align: center;
  padding: .25em 0;
  margin-bottom: 1em;
  font-family: 'Palanquin Dark', system-ui;
  font-size: 1.25em;
  color: #4795C2;
  background-color: #EBF8FF;

  &.failure {
    color: #EB5757;
    background-color: #FFEBEB;
  }
}

</style>
