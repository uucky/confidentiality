<template>
  <div class="layout">
    <Navbar />
    <Sidebar />
    <div class="cardContainer">
      <MockCard
        v-for="answer in showAnswers"
        :key="answer.key"
        :message="answer.message"
      />
    </div>
    <!-- <button @click="fetchCol">
      Clickme
    </button> -->
  </div>
</template>
<script>
import { guestCollection } from '@/utils/firebase';
import MockCard from '@/components/showcase/MockCard';
import Navbar from '@/components/showcase/Navbar';
import Sidebar from '@/components/showcase/Sidebar';
import questions from '@/questions';

export default {
  name: 'ShowcasePage',
  components: {
    Navbar,
    MockCard,
    Sidebar,
  },
  data() {
    return {
      guests: [],
    };
  },
  computed: {
    showAnswers() {
      if (this.guests.length < 1) return {};
      return Object.keys(this.guests).map(guest => Object.keys(this.guests[guest].answers)
        .map((questionNum) => {
          const showcaseTemplate = questions[`set${this.guests[guest].questionSet}`][`q${questionNum}`].showcase;
          const message = showcaseTemplate.replace('<username>', this.guests[guest].fruit).replace('<blank>', this.guests[guest].answers[questionNum]);
          return {
            key: `${this.guests[guest].uid}-q${questionNum}`,
            message,
          };
        })).flat().slice(0, 20);
    },
  },
  mounted() {
    this.fetchCol();
  },
  methods: {
    fetchCol() {
      guestCollection
        .orderBy('timestamp', 'desc')
        .limit(3).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.guests.push(doc.data());
          });
        });
    },
  },

};
</script>
<style scoped lang="postcss">
.layout {
  display: flex;
  flex-flow: row wrap;
  background-color: #E9EBEE;
}

.cardContainer {
  display: flex;
  flex-flow: row wrap;
  width: 32.375em;
}
</style>
