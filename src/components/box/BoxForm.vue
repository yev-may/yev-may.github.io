<script setup>
import { reactive } from 'vue';
import { save } from './../../module/boxService.js';

const boxForm = reactive({
    title: ""
})

function saveBox() {
    save({ title: boxForm.title });
}
</script>

<template>
    <form>
        <p>Title:</p>
        <input v-model="boxForm.title" type="text">
    </form>
    <button @click="saveBox">Save</button>
</template>