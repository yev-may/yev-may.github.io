<script setup>
import { reactive } from 'vue';
import { cardService } from './../module/cardService';
import { getLastRepetitionDate, getCardToRepeatToday, getCardQuantityByLevelMap } from './../module/repetitionService';

let context = reactive( {
    cardQuantityByLevelMap : getCardQuantityByLevelMap()
});
const cardForm = reactive({
    question: "",
    answer: "",
})

function saveCard() {
    cardService.saveCard(cardForm, 0);
    cardForm.question = "";
    cardForm.answer = "";
    update();
}

function update() {
    context.cardQuantityByLevelMap = getCardQuantityByLevelMap();
}
</script>
<template>
    <div>
        <p>Card to repeat today: {{ getCardToRepeatToday().length }}</p>
    </div>
    <div>
        <p>Last repetition date: {{ getLastRepetitionDate() }}</p>
    </div>
    <div>
        <form>
        <p>Question:</p>
        <input v-model="cardForm.question" type="text">
        <p>Answer:</p>
        <input v-model="cardForm.answer" type="text">
        </form>
        <button @click="saveCard()">Save</button>        
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
                <tr v-for="[key, value] in context.cardQuantityByLevelMap">
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>