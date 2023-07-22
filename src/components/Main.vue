<template>
  <div>
    <header>
      <div class="header_container">
        <button @click="activateTab('repetition')">Repetition</button>
        <button @click="activateTab('addCard')">Add Card</button>
        <button @click="activateTab( 'collection')">Collection</button>
      </div>
    </header>
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

<style>
body {
  margin: 0;
  font-size: 18px;
  font-family: Arial, serif;
}
header {
  background-color: black;
  height: 60px;
  display: flex;
  justify-content: center;
}

.header_container {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_container button {
  background-color: black;
  border: 1px solid white;
  color: white;
  height: 40px;
  font-size: 20px;
  margin-right: 10px;
}
.header_container button:last-child {
  margin-right: 0
}
.header_container button:hover {
  background-color: lightgray;
}
.header_container button:active {
  background-color: white;
  border: 1px solid black;
}

button {
  margin: 0;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
}
button:hover {
  background-color: lightgray;
  color: black;
}
button:active {
  border: 1px solid white;
  background-color: white;
  color: black;
}
</style>