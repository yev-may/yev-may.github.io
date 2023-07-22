<template>
  <div>
    <button @click="activateTab('repetition')">Repetition</button>
    <button @click="activateTab('addCard')">Add Card</button>
    <button @click="activateTab( 'collection')">Collection</button>
  </div>
  <div>
    <Repetition v-if="isActiveTab('repetition')"/>
    <CardForm v-if="isActiveTab('addCard')"/>
    <CardsView v-if="isActiveTab('collection')"/>
  </div>
</template>

<script setup>
import CardForm from "./CardForm.vue";
import CardsView from "./CardsView.vue";
import Repetition from "./Repetition.vue";
import {ref} from "vue";

const activeTap = ref("repetition");

function activateTab(tabName) {
  activeTap.value = tabName;
}

function isActiveTab(tabName) {
  return activeTap.value === tabName;
}
</script>