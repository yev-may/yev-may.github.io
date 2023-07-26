<template>
  <div class="nav_wrapper">
    <div class="nav_container">

      <div class="nav_burger">
        <button @click="navHidden = !navHidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>

      <nav v-if="!navHidden">
        <button @click="activateTab('repetition')">Repetition</button>
        <button @click="activateTab('addCard')">Add Card</button>
        <button @click="activateTab( 'collection')">Collection</button>
        <button @click="activateTab( 'settings')">Settings</button>
      </nav>

    </div>
  </div>

  <main>
    <Repetition v-if="isActiveTab('repetition')"/>
    <CardForm v-if="isActiveTab('addCard')"/>
    <CardsView v-if="isActiveTab('collection')"/>
    <Settings v-if="isActiveTab('settings')"/>
  </main>
</template>

<script setup>
import CardForm from "./CardForm.vue";
import CardsView from "./CardsView.vue";
import Repetition from "./Repetition.vue";
import Settings from "./Settings.vue";
import {ref} from "vue";

const activeTap = ref("repetition");
const navHidden = ref(true);

function activateTab(tabName) {
  activeTap.value = tabName;
}

function isActiveTab(tabName) {
  return activeTap.value === tabName;
}
</script>

<style>
.nav_wrapper {
  background-color: black;
  padding: 10px;
}

.nav_container {
  max-width: 500px;
  margin: 0 auto;
}

nav button {
  margin-top: 5px;
}

.nav_burger button {
  padding: 5px;
}


#app {
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
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
</style>