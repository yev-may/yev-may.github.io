<script setup>
import {computed, reactive, ref} from "vue";
import {deleteCard, getCards, updateCard} from "../module/cardService";

const cards = ref(getCards());
// Pagination
const pageSize = ref(7);
const pageSelected = ref(0);
const totalPages = computed(() => Math.ceil(cards.value.length / pageSize.value));
const pageContent = computed(() => cards.value.slice(
    pageSelected.value * pageSize.value,
    pageSelected.value * pageSize.value + pageSize.value));
// Edit
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
  cancelCardUpdate();
}

function confirmCardRemoving(cardId) {
  deleteCard(cardId);
  updateCards()
}

function formatQuestionPreview(question) {
  return question.length > 32 ? question.slice(0, 29) + "..." : question;
}
</script>

<template>
  <div class="view">
    <div class="view_container">

      <div class="card-view" v-if="!editCardForm.id">
        <div class="card_preview" v-for="card in pageContent">
          <div class="card_preview_text">
            {{ formatQuestionPreview(card.question) }}
          </div>
          <div class="card_preview_actions">
            <button class="action_button" @click="selectCardToEdit(card)">E</button>
            <button class="action_button" @click="confirmCardRemoving(card.id)">X</button>
          </div>
        </div>

        <div class="pagination-controller">
          <button class="pagination-button"
                  v-for="index in totalPages"
                  @click="pageSelected = index - 1">
            {{ index }}
          </button>
        </div>
      </div>

      <div class="edit-card_form" v-if="editCardForm.id">
        <p>Question:</p>
        <textarea rows="3" v-model="editCardForm.question"/>

        <p>Answer:</p>
        <textarea rows="3" v-model="editCardForm.answer"/>

        <div class="inline-blocks">
          <button @click="confirmCardUpdate()">Save</button>
          <button @click="cancelCardUpdate()">Cancel</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.card_preview {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  border: 1px solid black;
}
.card_preview:last-child {
  margin-bottom: 0;
}

.card_preview_text {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.card_preview_actions {
  display: flex;
}

.action_button {
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inline-blocks {
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}

.edit-card_form button {
  display: inline-block;
  width: 245px;
}

.pagination-controller {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.pagination-button {
  height: 50px;
  width: 50px;
  margin: 5px;
}
</style>