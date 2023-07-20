<script setup>
import {reactive} from "vue";
import {saveCard} from "../module/cardService";

const cardForm = reactive({
  question: "question",
  answer: "answer"
});
</script>

<template>
  <div class="card_form">
    <p>Question:</p>
    <input v-model="cardForm.question">

    <p>Answer:</p>
    <input v-model="cardForm.answer">

    <button @click="saveCard(cardForm)">Add</button>
  </div>
</template>

<style scoped>

</style>