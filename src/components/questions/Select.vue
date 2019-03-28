<template>
  <div class="textQuestion">
    <p class="question-text">
      {{ question }}
    </p>
    <ul class="optionList">
      <slot name="inputArea" />
    </ul>
    <slot name="submitBtn" />
  </div>
</template>
<script>
export default {
  name: 'SelectQuestion',
  props: {
    question: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped lang="postcss">
.textQuestion {
  display: flex;
  flex-flow: row wrap;
}

.optionList {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>
