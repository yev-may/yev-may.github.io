<script setup>
import Box from './Box.vue';
import BoxForm from './BoxForm.vue';
import { computed } from 'vue';
import { getBoxes } from '../../module/boxService';

const boxes = computed(() => getBoxes())
</script>

<template>
    <ul>
        <li v-for="box in boxes">
            <Box :box="box" />
        </li>
    </ul>
    <BoxForm />
</template>