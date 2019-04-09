<template>
  <aside class="sideContainer">
    <div class="sideItem active">
      News Feed
    </div>
    <div class="sideItem">
      Messenger
    </div>
    <div class="sideItem">
      Videos to watch
    </div>
    <div class="sideItem">
      Marketplace
    </div>
  </aside>
</template>
<script>
export default {
  name: 'Sidebar',
};
</script>
<style lang="postcss" scoped>
.sideContainer {
  display: flex;
  flex-flow: column nowrap;
  padding: 1.875em 0;
  width: 12.25em;
  min-height: calc(100vw - 3.125em);
  border-right: 1px solid black;
  background-color: #E9EBEE;
}

.sideItem {
  font-family: 'Arial', system-ui;
  margin: .5em auto .5em 2.75em;

  &.active {
    font-weight: 600;
  }
}
</style>
