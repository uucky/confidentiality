<template>
  <button @click="fetchCol">Clickme</button>
</template>
<script>
import { guestCollection } from '../utils/firebase';

export default {
  data() {
    return {
      guests: [],
    };
  },
  methods: {
    fetchCol() {
      guestCollection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.guests.push(doc.data());
        });
      });
    },
  },
};
</script>
