<template>
  <div class="layout">
    <h1 class="title">
      Submitted.
    </h1>
    <p class="description">
      Thank you <span class="fruitName">{{ fruit }}</span>!
    </p>
    <p class="description">
      Well done finishing the questions. Now you can come to our staff and get your reward!
    </p>
    <div class="imageContainer">
      <img
        class="floorplan"
        src="@/assets/floorplan.jpg"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResultPage',
  computed: {
    fruit() {
      return this.$store.state.fruit;
    },
  },
  mounted() {
    if (!this.fruit) this.$router.push('/');
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
  margin: 10em auto 0;

  padding: 0 1.8rem;
}

.description {
  @apply w-full;
  color: #1A7AA4;
  font-size: 1.5em;
  font-family: 'Work Sans', system-ui;
  margin-top: 1.1875em;
}

.fruitName {
  color: #EB5757;
}

.imageContainer {
  margin-top: 3em;
}

.floorplan {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center top;
}

</style>
