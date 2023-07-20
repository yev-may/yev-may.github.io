<script setup>
import {ref} from "vue";
import {deleteCard, getCards} from "../module/cardService";

const cards = ref(getCards());
</script>

<template>
  <div class="cards_view">
    <p>Cards:</p>
    <div class="card_view" v-for="card in cards">
      {{ card.question }}
      <button type="submit" @click="deleteCard(card.question)">Delete</button>
    </div>
  </div>
</template>

<style scoped>

</style>