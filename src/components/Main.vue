<script setup>
import NewCardForm from './card/NewCardForm.vue';
import { getLastRepetitionDate, getCardToRepeatToday } from './../module/repetitionService';
import { computed } from 'vue';

const cardToRepeatTodayQuantity = computed(() => {
    return getCardToRepeatToday().length;
})

</script>
<template>
    <NewCardForm />
    <div>
        <p>Card to repeat today: {{ cardToRepeatTodayQuantity }}</p>
    </div>
    <div>
        <p>Last repetition date: {{ getLastRepetitionDate() }}</p>
    </div>
</template>