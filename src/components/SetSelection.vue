<template>
  <section>
    <p class="questionText">
      Please choose a survey category:
    </p>
    <div class="questionArea">
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
        type="button"
        class="btn-regular btnInQuestion"
        :disabled="!answerIsValid"
        @click="startQuestion"
      >
        Next
      </button>
    </div>
  </section>
</template>
<script>

export default {
  name: 'SetSelection',
  data() {
    return {
      answer: '',
      options: {
        1: 'Career',
        2: 'Romance',
        3: 'Friend',
        4: 'Family',
        5: 'Miscellaneous',
      },
    };
  },
  computed: {
    answerIsValid() {
      return !!this.answer;
    },
  },
  methods: {
    startQuestion() {
      this.$store.commit('INCR_QUESTIONNUM');
      this.$store.commit('SET_QUESTIONSET', { setNum: this.answer });
    },
  },
};
</script>
<style scoped lang="postcss">
.questionArea {
  display: flex;
  flex-flow: row wrap;
}

.questionText {
  font-family: 'Work Sans', system-ui;
  font-size: 1.5em;
  @apply text-sub;
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
