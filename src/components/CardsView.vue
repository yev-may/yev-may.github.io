<script setup>
import {reactive, ref} from "vue";
import {deleteCard, getCards, updateCard} from "../module/cardService";

const cards = ref(getCards());
const editCardForm = reactive({
  question: "",
  answer: ""
})

function selectCardToEdit(card) {
  editCardForm.question = card.question;
  editCardForm.answer = card.answer;
}
</script>

<template>
  <div class="cards_view">
    <p>Cards:</p>
    <table>
      <tr>
        <th>Question</th>
        <th>Answer</th>
        <th>Save</th>
        <th>Delete</th>
      </tr>
      <tr v-for="card in cards">
        <td>{{ card.question }}</td>
        <td>{{ card.answer }}</td>
        <td><button @click="selectCardToEdit(card)">Edit</button></td>
        <td><button @click="deleteCard(card.question)">Delete</button></td>
      </tr>
    </table>

    <div class="edit_form" v-if="editCardForm">
      <p>Question:</p>
      <input v-model="editCardForm.question">

      <p>Answer:</p>
      <input v-model="editCardForm.answer">

      <button @click="updateCard(editCardForm)">Save</button>
    </div>
  </div>
</template>

<style scoped>

</style>