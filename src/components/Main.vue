<script setup>
import NewCardForm from './card/NewCardForm.vue';
import { getLastRepetitionDate, getCardToRepeatToday, getCardQuantityByLevelMap } from './../module/repetitionService';

</script>
<template>
    <NewCardForm />
    <div>
        <p>Card to repeat today: {{ getCardToRepeatToday().length }}</p>
    </div>
    <div>
        <p>Last repetition date: {{ getLastRepetitionDate() }}</p>
    </div>
    <div>
        <table>
            <thead>
               <tr>
                    <th>Level</th>
                    <th>Cards</th>
               </tr>
            </thead>
            <tbody>
                <tr v-for="[key, value] in getCardQuantityByLevelMap()">
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>