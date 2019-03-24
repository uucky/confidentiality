<template>
  <div class="layout">
    <h1 class="title">Take our survey.</h1>
    <p class="description">
      If you take our beautiful cute survey we will give you some fresh treats! Please ask our staff for detail.  We need to fill more sentences here so these.
    </p>
    <div class="button-container">
      <button
        type="button"
        class="btn-regular"
      >
        Start
      </button>
    </div>
    <section class="footnote-container">
      <p class="footnote">
        By clicking Start, you agree to our Terms, Data Policy and Cookies Policy.
      </p>
    </section>
  </div>
</template>
<script>
</script>
<style scoped lang="postcss">
.title {
  @apply block w-full text-accent;
  font-family: 'Palanquin Dark', system-ui;
  font-size: 3.75em;
  font-weight: 500;
  margin-bottom: 1.25rem;
}

.layout {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 40em;
  margin: 5em auto 0;
}

.button-container {
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
}

.description {
  @apply w-full;
  color: #1A7AA4;
  font-size: 1em;
  font-family: 'Work Sans', system-ui;
  margin-bottom: 5.25em;
}

.footnote-container {
  width: 100%;
  text-align: center;
}
</style>
