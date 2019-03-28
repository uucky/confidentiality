<template>
  <div class="layout">
    <h1 class="title">Submitted.</h1>
    <p class="description">
      If you take our beautiful cute survey we will give you some fresh treats! Please ask our staff for detail. We need to fill more sentences here so these.
    </p>
    <div class="button-container">
      <button
        type="button"
        class="btn-regular"
        @click="submitData"
      >
        Submit
      </button>
    </div>
    {{ state }}
    <section class="footnote-container">
      <p class="footnote">
        By clicking Start, you agree to our <span class="underlined">Terms, Data and Cookies Policy</span>.
      </p>
    </section>
  </div>
</template>
<script>
import { guestCollection } from './utils/firebase';

export default {
  name: 'SubmitPage',
  data() {
    return {
      state: 'ready',
      error: null,
    };
  },
  methods: {
    async submitData() {
      const { setNum, answers, uid } = this.$store.state;
      try {
        await guestCollection.add({
          setNum, answers, uid,
        });
        this.state = 'success';
      } catch (e) {
        this.state = 'error';
        this.error = e;
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

.button-container {
  width: 100%;
  text-align: center;
  margin-bottom: 2em;
}

.description {
  @apply w-full;
  color: #1A7AA4;
  font-size: 1em;
  font-family: 'Work Sans', system-ui;
  margin-bottom: 5.25em;

  line-height: 180%;
}

.footnote-container {
  width: 100%;
  text-align: center;
  padding: 0 3rem;
}


</style>
