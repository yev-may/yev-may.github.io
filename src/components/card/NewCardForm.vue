<script setup>
import { reactive } from 'vue';
import { saveCard } from './../../module/cardService';

const cardForm = reactive({
    question: "",
    answer: "",
})
</script>

<template>
    <form>
        <p>Question:</p>
        <input v-model="cardForm.question" type="text">
        <p>Answer:</p>
        <input v-model="cardForm.answer" type="text">
    </form>
    <button @click="saveCard(cardForm, 0)">Save</button>
</template>