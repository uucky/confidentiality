<template>
  <div class="card">
    <div class="firstRow">
      <div class="avatar" />
      <p class="username">
        Said in Confidence
      </p>
    </div>
    <div class="secondRow">
      <p class="message">
        Hi guys, <br><br>
        {{ message }}
      </p>
    </div>
    <div class="thirdRow"></div>
  </div>
</template>
<script>
export default {
  name: 'MockCard',
  props: {
    message: {
      type: String,
      default: 'Default msg',
    },
  },
};
</script>
<style lang="postcss" scoped>
.card {
  @apply bg-white w-full;
  display: flex;
  flex-flow: row wrap;
  height: 20.875em;
  padding: 1em;
}

.firstRow {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}

.secondRow {
  width: 100%;
}

.thirdRow {
  width: 100%;
}

.avatar {
  @apply bg-accent;
  width: 3.375em;
  height: 3.375em;
}

.username {
  @apply text-fb-blue;
  font-family: system-ui;
  font-weight: 600;
  font-size: .875em;
}

.message {
  font-family: system-ui;
  font-size: 1.625em;
}
</style>
