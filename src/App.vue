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

button, .button {
  box-sizing: border-box;
  margin: 0;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100%;
  text-align: center;
}

button:hover, .button:hover {
  background-color: lightgray;
  color: black;
}
button:active, .button:active {
  border: 1px solid white;
  background-color: white;
  color: black;
}

textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  font-size: 14px;
  font-family: Arial, serif;
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

.info-alert {
  width: 100%;
  border: 1px solid black;
  padding: 15px 0;
  text-align: center;
}
</style>