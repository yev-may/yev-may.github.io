<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import Textarea from "primevue/textarea";
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
const isEditActive = computed(() => editCardForm.id != null);
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

    <div class="view_container vertical-space-between" v-if="!isEditActive">
      <div class="cards">
        <Card class="card" v-for="card in pageContent">
          <template #content>
            <div class="inline-space-between">

              <div class="card-preview_text">
                {{ formatQuestionPreview(card.question) }}
              </div>

              <div class="card-actions">
                <Button icon="pi pi-cog"
                        @click="selectCardToEdit(card)"/>
                <Button icon="pi pi-times"
                        severity="danger"
                        @click="confirmCardRemoving(card.id)"/>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="pagination-controller">
        <Button class="pagination-button"
                v-for="index in totalPages"
                @click="pageSelected = index - 1"
                :label="index"/>
      </div>
    </div>

    <div class="view_container" v-if="isEditActive">
      <div class="edit-card_form">


        <div class="card-side flex justify-content-center">
        <span class="p-float-label">
          <Textarea v-model="editCardForm.question" rows="3"/>
          <label>Question</label>
        </span>
        </div>

        <div class="card-side flex justify-content-center">
        <span class="p-float-label">
          <Textarea v-model="editCardForm.answer" rows="3"/>
          <label>Answer</label>
        </span>
        </div>

        <div class="btn-panel inline-buttons">
          <Button label="Save" @click="confirmCardUpdate()"/>
          <Button label="Cancel" @click="cancelCardUpdate()"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 10px;
}

.card-preview_text {
  display: flex;
  align-items: center;
}

.card-actions > button {
  margin-left: 10px;
}

.pagination-controller {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.pagination-button {
  width: 37px;
  margin-right: 10px;
}
.pagination-button:last-child {
  margin-right: 0;
}
</style>