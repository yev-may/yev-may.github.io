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


.view {
  height: 100%;
  display: flex;
  justify-content: center;
}

.view_container {
  width: 500px;
  padding: 10px;
}
</style>