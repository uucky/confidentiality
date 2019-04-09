<template>
  <transition name="list">
    <div
      v-show="timeFromNow.elapsed > 60000"
      class="card"
    >
      <div class="firstRow">
        <div class="avatar" />
        <div class="rightPart">
          <p class="username">
            Said in Confidence
          </p>
          <p class="time">
            {{ timeFromNow.formatted }}
          </p>
        </div>
      </div>
      <div class="secondRow">
        <p class="message">
          {{ message }}
        </p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MockCard',
  props: {
    message: {
      type: String,
      default: 'Default msg',
    },
    timestamp: {
      type: Object,
      default: () => ({
        seconds: 1554804563,
        nanoseconds: 762000000,
      }),
    },
  },
  data() {
    return {
      timeFromNow: null,
      polling: null,
    };
  },
  // computed: {
  //   convertedTime() {
  //     const { seconds, nanoseconds } = this.timestamp;
  //     const newDate = new Date(seconds * 1000 + nanoseconds / 1000);
  //     return this.timeElapsed(newDate);
  //   },
  // },
  created() {
    this.getTimeFromNow();
    this.polling = setInterval(() => this.getTimeFromNow(), 1000);
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    timeElapsed(origTime) {
      const now = Date.now();
      const origDate = new Date(origTime);
      const elapsed = now - origDate;
      let formatted = '';
      if (elapsed < 60000) {
        formatted = `${new Date(elapsed).getUTCSeconds()}s ago`;
      } else if (elapsed < 3600000) {
        formatted = `${new Date(elapsed).getUTCMinutes()}m ago`;
      } else if (elapsed < 86400000) {
        formatted = `${new Date(elapsed).getUTCHours()}h${new Date(elapsed).getUTCMinutes()}m ago`;
      } else if (elapsed < 259200000) {
        formatted = `${new Date(elapsed).getUTCDate()}d${new Date(elapsed).getUTCHours()}h ago`;
      } else {
        const options = {
          year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false,
        };
        formatted = origDate.toLocaleString('en-CA', options).replace(',', '');
      }
      return { formatted, elapsed };
    },
    getTimeFromNow() {
      const { seconds, nanoseconds } = this.timestamp;
      const newDate = new Date(seconds * 1000 + nanoseconds / 1000000);
      this.timeFromNow = this.timeElapsed(newDate);
    },
  },
};
</script>
<style lang="postcss" scoped>
.card {
  @apply bg-white w-full;
  display: flex;
  flex-flow: row wrap;
  /* height: 20.875em; */
  padding: 1em;
  margin: 1em 0 0;
}

.firstRow {
  width: 100%;
  height: 3.375em;
  display: flex;
  flex-flow: row nowrap;

  & .rightPart {
    margin-left: 1em;
    padding: .5em 0 0;
    display: flex;
    flex-flow: row wrap;
  }
}

.secondRow {
  width: 100%;
}

.avatar {
  @apply bg-accent;
  width: 3.375em;
  height: 3.375em;
}

.username {
  @apply text-fb-blue;
  width: 100%;
  font-family: system-ui;
  font-weight: 600;
  font-size: .875em;
}

.time {
  color: #9197A3;
  font-size: .75rem;
}

.message {
  padding: .5em 0 0;
  font-family: 'Helvetica', system-ui;
  font-size: 1.625em;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-32.375em);
}
</style>
