<template>
  <div class="layout">
    <p
      v-if="isSubmitting"
      class="submitStatus"
      :class="{failure: state === 'failed'}"
    >
      {{ submitMsg[state] }}
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
  },
  data() {
    return {
      state: 'ready',
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
      this.$store.commit('SET_THIS_ANSWER', { answer: this.lastAnswer });
    },
    async submitData() {
      this.saveLastAnswer();
      this.isSubmitting = true;
      this.state = 'submitting';
      const { setNum, answers, uid } = this.$store.state;
      try {
        await guestCollection.add({
          setNum, answers, uid,
        });
        this.state = 'success';
      } catch (e) {
        this.state = 'failed';
        this.error = e;
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
