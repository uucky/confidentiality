<template>
  <section>
    <div class="modal">
      <p class="description">
        You are assigned a new name:
      </p>
      <p class="fruitName">
        {{ fruit }}
      </p>
      <p
        v-if="isLoggingIn"
        class="loginStatus"
        :class="{failure: status === 'failed'}"
      >
        {{ loginMsg[status] }}
        {{ error }}
      </p>
      <button
        class="btn-regular"
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
import { auth } from '@/utils/firebase';

export default {
  name: 'RandomFruit',
  data() {
    return {
      fruit: '',
      uid: '',
      status: 'ready',
      error: null,
      isLoggingIn: false,
      loginMsg: {
        loggingIn: 'Logging in...',
        failed: 'Bad Internet, try again?',
        success: 'Successfully logged in.',
      },
    };
  },
  mounted() {
    this.setFruit();
  },
  methods: {
    setFruit() {
      this.fruit = getFruit();
    },
    async startQuestion() {
      try {
        this.status = 'loggingIn';
        this.isLoggingIn = true;
        await auth.signInAnonymously();
        this.loggedIn = true;
        auth.onAuthStateChanged((user) => {
          if (user) {
            this.$store.commit('SET_FRUIT', { fruit: this.fruit });
            this.$store.commit('SET_UID', { uid: user.uid });
          } else {
            this.status = 'failed';
            this.error = 'Not logged in.';
          }
        });
        this.$router.push({ path: '/question' });
      } catch (e) {
        this.status = 'failed';
        this.error = e.message;
      }
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

  padding: 1.25em;
  width: 13.5625em;
  height: 18.6875em;
  box-shadow: 0px 15px 16px rgba(0, 0, 0, 0.25);
  border-radius: .75em;
}

.description {
  @apply text-sub;
  font-size: 1.125em;
  font-family: 'Work Sans', system-ui;
}

.fruitName {
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

</style>
