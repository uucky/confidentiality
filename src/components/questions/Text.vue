<template>
  <div class="textQuestion">
    <p class="question-text">
      {{ question }}
    </p>
    <slot name="inputArea" />
    <slot name="submitBtn" />
  </div>
</template>
<script>
export default {
  name: 'TextQuestion',
  props: {
    question: {
      type: String,
      default: '',
    },
  },
  date() {
    return {
      answer: '',
    };
  },
};
</script>
<style scoped lang="postcss">
.textQuestion {
  display: flex;
  flex-flow: row wrap;
}

</style>
