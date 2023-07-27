<script setup>
import Main from './components/Main.vue';
</script>

<template>
    <Main />
</template>

<style>
body {
  margin: 0;
  font-size: 18px;
  font-family: Arial, serif;
}

p {
  margin: 0;
}

html, body, #app {
  height: 100%;
}

input {
  font-size: 18px;
  border: 1px solid black;
}

textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  font-size: 14px;
  font-family: Arial, serif;
}

button {
  width: 100%;
}


.view {
  height: 100%;
  display: flex;
  justify-content: center;
}

.view_container {
  width: 500px;
  padding: 10px;
}

.vertical-space-between {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.card-side {
  margin-top: 25px;
}


.inline-space-between {
  display: flex;
  justify-content: space-between;
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

.btn-panel {
  margin-top: 15px;
}
</style>