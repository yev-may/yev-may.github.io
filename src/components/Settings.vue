<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
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
            <InputText v-model="settings[index - 1]"/>
          </div>
        </div>
        <div class="inline-buttons">
          <Button class="inline-btn" label="Remove level" @click="removeLevel()"/>
          <Button class="inline-btn" label="Add level" @click="addLevel()"/>
        </div>
      </div>

      <Button label="Save" @click="saveSettings(settings)"/>
      <Button label="Reset Default" @click="confirmSettingsReset()"/>
    </div>
  </div>
</template>

<style scoped>
.settings-item {
  display: flex;
  justify-content: center;
}

.inline-buttons {
  display: flex;
}

.inline-buttons button {
  margin-right: 10px;
}
.inline-buttons button:last-child {
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