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


.info-alert {
  width: 100%;
  border: 1px solid black;
  padding: 15px 0;
  text-align: center;
}
</style>