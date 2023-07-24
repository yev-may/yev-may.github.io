<script setup>
import {ref} from "vue";
import {DEFAULT_SETTINGS, getSettings, saveSettings} from "../module/settingsService";

const settings = ref(getSettings());
const maxLevel = ref(getMaxLevel(settings));

function addLevel() {
  settings.value[maxLevel.value] = "1m";
  updateMaxLevel();
}

function removeLevel() {
  delete settings.value[maxLevel.value - 1];
  updateMaxLevel();
}

function getMaxLevel(settings) {
  return Object.values(settings.value).length;
}

function confirmSettingsReset() {
  saveSettings(DEFAULT_SETTINGS);
  settings.value = getSettings();
  updateMaxLevel();
}

function updateMaxLevel() {
  maxLevel.value = getMaxLevel(settings);
}
</script>

<template>
  <div class="view">
    <div class="view_container">

      <div class="settings">
        <div class="settings-item" v-for="index in maxLevel">
          <div class="settings-item_section">{{ index }}</div>
          <div class="settings-item_section">
            <input v-model="settings[index - 1]"/>
          </div>
        </div>
        <div class="settings-buttons">
          <button @click="removeLevel()">Remove level</button>
          <button @click="addLevel()">Add level</button>
        </div>
      </div>

      <button @click="saveSettings(settings)">Save</button>
      <button @click="confirmSettingsReset()">Reset Default</button>
    </div>
  </div>
</template>

<style scoped>
.settings {

}

.settings-item {
  display: flex;
  justify-content: center;
}

.settings-buttons {
  display: flex;
}

.settings-buttons button {
  margin-right: 10px;
}
.settings-buttons button:last-child {
  margin-right: 0;
}

.settings-item_section {
  display: flex;
  align-items: center;
  margin: 3px;
}
.settings-item_section input {
  width: 140px;
}

button {
  margin-top: 10px;
}
</style>