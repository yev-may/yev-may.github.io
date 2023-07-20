<template>
  <div class="card_form">
    <p>Question:</p>
    <input v-model="cardForm.question">

    <p>Answer:</p>
    <input v-model="cardForm.answer">

    <button @click="saveCard()">Add</button>
  </div>

  <div class="cards_view">
    <p>Cards:</p>
    <div class="card_view" v-for="card in cards">
      {{ card.question }}
      <button @click="deleteCard(card.question)">Delete</button>
    </div>
  </div>

</template>
<script setup>
import {reactive, ref} from "vue";

  const cards = ref(getCards());

  const cardForm = reactive({
    question: "question",
    answer: "answer"
  });

  function updateCards() {
    cards.value = getCards();
  }

  function saveCard() {
    cardForm.creationDate = new Date();
    const cards = getCards();
    cards.push(cardForm)
    saveCards(cards);

    updateCards();
  }

  function deleteCard(question) {
    const cards = getCards().filter(card => card.question !== question);
    saveCards(cards);

    updateCards();
  }

  function getCards() {
    const cards = localStorage.getItem("cards");
    return cards ? JSON.parse(cards) : [];
  }

  function saveCards(cards) {
    return localStorage.setItem("cards", JSON.stringify(cards));
  }
</script>