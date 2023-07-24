<script setup>
import {reactive} from "vue";
import {saveCard} from "../module/cardService";

const cardForm = reactive({
  question: "question",
  answer: "answer"
});

function confirmCardCreation() {
  saveCard(cardForm);
  alert("Card created");
}
</script>

<template>
  <div class="view">
    <div class="view_container">
      <p>Question:</p>
      <input v-model="cardForm.question">

      <p>Answer:</p>
      <input v-model="cardForm.answer">

      <button @click="confirmCardCreation()">Add</button>
    </div>
  </div>
</template>

<style scoped>

</style>