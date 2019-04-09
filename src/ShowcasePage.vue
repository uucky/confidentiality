<template>
  <div class="layout">
    <Navbar />
    <Sidebar />
    <div class="cardContainer">
      <transition-group
        appear
        name="list"
        tag="div"
      >
        <div
          v-for="answerGroup in showAnswers"
          :key="answerGroup.uid"
          class="cardGroup"
        >
          <MockCard
            v-for="answer in answerGroup.formattedAnswers"
            :key="answer.questionNum"
            :message="answer.message"
            :timestamp="answerGroup.timestamp"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { answerCollection } from '@/utils/firebase';
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
      return Object.keys(this.guests).map((idx) => {
        const {
          uid, answers, questionSet, fruit, timestamp,
        } = this.guests[idx];
        const formattedAnswers = Object.keys(answers).map((questionNum) => {
          const curQuestion = questions[`set${questionSet}`][`q${questionNum}`];
          const showcaseTemplate = curQuestion.showcase;
          const answer = curQuestion.type === 'text' ? answers[questionNum] : curQuestion.options[answers[questionNum]];
          const message = showcaseTemplate.replace('<username>', fruit).replace('<blank>', answer);
          return {
            questionNum,
            message,
          };
        });
        return { uid, formattedAnswers, timestamp };
      });
    },
  },
  mounted() {
    this.fetchCol();
  },
  methods: {
    fetchCol() {
      answerCollection
        .orderBy('timestamp', 'desc')
        .limit(1).onSnapshot((querySnapshot) => {
          querySnapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              // Dirty hack
              this.guests.unshift(change.doc.data());
              if (this.guests.length === 5) {
                this.guests.pop();
                this.guests.unshift(change.doc.data());
              }
            }
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

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-32.375em);
}
</style>
