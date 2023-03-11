<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    box: Object
})
</script>

<template>
    <div>
        <p>{{ box.title }}</p>
    </div>
</template>