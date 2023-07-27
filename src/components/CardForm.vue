<script setup>
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import {reactive} from "vue";
import {saveCard} from "../module/cardService";

const cardForm = reactive({
  question: "",
  answer: ""
});

function confirmCardCreation() {
  saveCard(cardForm);
  alert("Card created");
}
</script>

<template>
  <div class="view">
    <div class="view_container">

      <div class="card-side flex justify-content-center">
        <span class="p-float-label">
          <Textarea v-model="cardForm.question" rows="3"/>
          <label>Question</label>
        </span>
      </div>

      <div class="card-side flex justify-content-center">
        <span class="p-float-label">
          <Textarea v-model="cardForm.answer" rows="3"/>
          <label>Answer</label>
        </span>
      </div>

      <Button class="btn-panel" label="Add" @click="confirmCardCreation()"/>

    </div>
  </div>
</template>

<style scoped>

</style>