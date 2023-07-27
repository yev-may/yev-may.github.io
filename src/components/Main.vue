<template>
  <div class="nav_wrapper">
    <div class="nav_container">
      <SplitButton class="nav_selector" :label="activeTapLabel" :model="navItems"></SplitButton>
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
import SplitButton from "primevue/splitbutton";
import CardForm from "./CardForm.vue";
import CardsView from "./CardsView.vue";
import Repetition from "./Repetition.vue";
import Settings from "./Settings.vue";
import {computed, reactive, ref} from "vue";

const navItemsConfig = [
  { label: "Repetition", tabName: 'repetition' },
  { label: "Add Card", tabName: 'addCard' },
  { label: "Collection", tabName: 'collection' },
  { label: "Settings", tabName: 'settings' }
];

const activeTab = ref(navItemsConfig[0].tabName);
const activeTapLabel = computed(() => navItemsConfig.find(nic => nic.tabName === activeTab.value).label)
const navHidden = ref(true);

const navItems = navItemsConfig.map(nic => {
  return {
    label: nic.label,
    tabName: nic.tabName,
    command: () => activateTab(nic.tabName)
  }
});

function activateTab(tabName) {
  activeTab.value = tabName;
  navHidden.value = true;
}

function isActiveTab(tabName) {
  return activeTab.value === tabName;
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
  background-color: var(--surface-ground);
}

header {
  height: 60px;
  display: flex;
  justify-content: center;
}

.nav_wrapper {
  background-color: var(--surface-card);
  padding: 10px;
  display: flex;
  justify-content: center;
}

.nav_container {
  width: 500px;
}

.nav_selector {
  width: 100%;
}
</style>