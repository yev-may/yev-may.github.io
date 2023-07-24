<script setup>
import {reactive, ref} from "vue";
import {deleteCard, getCards, updateCard} from "../module/cardService";

const cards = ref(getCards().sort((c1, c2) => c1.creationDate - c2.creationDate));
const editCardForm = reactive({
  id: null,
  question: "",
  answer: ""
})

function selectCardToEdit(card) {
  editCardForm.id = card.id;
  editCardForm.question = card.question;
  editCardForm.answer = card.answer;
}

function cancelCardUpdate() {
  editCardForm.id = null;
}

function updateCards() {
  cards.value = getCards();
}

function confirmCardUpdate() {
  updateCard(editCardForm);
  updateCards()
}

function confirmCardRemoving(cardId) {
  deleteCard(cardId);
  updateCards()
}
</script>

<template>
  <div class="view">
    <div class="view_container">

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
            <td><button @click="confirmCardRemoving(card.id)">Delete</button></td>
          </tr>
        </table>

        <div class="edit_form" v-if="editCardForm.id">
          <p>Question:</p>
          <input v-model="editCardForm.question">

          <p>Answer:</p>
          <input v-model="editCardForm.answer">

          <button @click="confirmCardUpdate()">Save</button>
          <button @click="cancelCardUpdate()">Cancel</button>
        </div>

    </div>
  </div>
</template>

<style scoped>

</style>