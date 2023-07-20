<template>
  <div class="card_form">
    <p>Question:</p>
    <input v-model="cardForm.question">

    <p>Answer:</p>
    <input v-model="cardForm.answer">

    <button @click="saveCard()">Add</button>
  </div>
</template>
<script setup>
  import {reactive} from "vue";

  const cardForm = reactive({
    question: "",
    answer: ""
  });

  function saveCard() {
    const cards = getCards();
    cards.push(cardForm)
    saveCards(cards);
  }

  function getCards() {
    const cards = localStorage.getItem("cards");
    return cards ? JSON.parse(cards) : [];
  }

  function saveCards(cards) {
    return localStorage.setItem("cards", JSON.stringify(cards));
  }
</script>