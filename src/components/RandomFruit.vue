<template>
  <section>
    <div class="modal">
      <p class="description">
        You are assigned a new name:
      </p>
      <p class="fruitName">
        {{ fruit }}
      </p>
      <button
        class="btn-regular startBtn"
        @click="startQuestion"
      >
        OK
      </button>
    </div>
    <div class="modalOverlay" />
  </section>
</template>
<script>
import { getFruit } from '@/utils/randomFruits';

export default {
  name: 'RandomFruit',
  data() {
    return {
      fruit: '',
      uid: '',
      status: 'ready',
    };
  },
  mounted() {
    this.setFruit();
  },
  methods: {
    setFruit() {
      this.fruit = getFruit();
    },
    startQuestion() {
      this.$store.commit('SET_ALLOWTOANSWER', { status: true });
      this.$store.commit('SET_FRUIT', { fruit: this.fruit });
      this.$router.push({ path: '/question' });
    },
  },
};
</script>
<style lang="postcss" scoped>
.modalOverlay {
  @apply z-10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.75);
}

.modal {
  @apply bg-white z-20;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  padding: 3.375em 1.25em 2.15em;
  height: 23.8125em;
  width: 18.6875em;
  box-shadow: 0px 15px 16px rgba(0, 0, 0, 0.25);
  border-radius: .75em;
}

.description {
  @apply text-sub;
  font-size: 1.125em;
  font-family: 'Work Sans', system-ui;
}

.fruitName {
  align-self: center;
  font-family: 'Palanquin Dark', system-ui;
  font-size: 2.25em;
  color: #EB5757;
}

.loginStatus {
  text-align: center;
  padding: .25em 0;
  margin-bottom: 1em;
  font-family: 'Palanquin Dark', system-ui;
  font-size: 1.25em;
  color: #4795C2;
  background-color: #EBF8FF;

  &.failure {
    color: #EB5757;
    background-color: #FFEBEB;
  }
}

.startBtn {
  align-self: center;
  width: 12.5em;
}

</style>
