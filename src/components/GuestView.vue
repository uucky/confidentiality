<template>
  <button @click="fetchCol">Clickme</button>
</template>
<script>
import { guestsCollection } from '../utils/firebase';

export default {
  data() {
    return {
      guests: [],
    };
  },
  methods: {
    fetchCol() {
      guestsCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.guests.push(doc.data());
        });
      });
    },
  },
};
</script>
