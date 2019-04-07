<template functional>
  <nav class="navContainer">
    <div class="rotateT">
      <span class="letterT">t</span>
    </div>
    <input
      class="mockInput"
      placeholder="Search..."
    >
    <button class="mockBtn">
      Go
    </button>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
<style lang="postcss" scoped>
.navContainer {
  @apply bg-fb-blue;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 3.125em;
}

.rotateT {
  @apply bg-white;
  margin-left: .875em;
  width: 1.875em;
  height: 1.875em;
  transform: rotate(180deg);
}

.letterT {
  @apply text-fb-blue;
  display: inline-block;
  font-family: 'Palanquin Dark', system-ui;
  font-size: 2.25em;
  font-weight: 600;
  transform: translate(.1em, -.4em);
}

.mockInput {
  font-family: system-ui;
  margin-left: 1em;
  padding: 0 .5em;
  width: 23.75em;
  height: 1.875em;
}

.mockBtn {
  background-color: #E5E5E5;
  font-family: system-ui;
  margin-left: 1em;
  width: 3.5em;
  height: 1.875em;
}
</style>
