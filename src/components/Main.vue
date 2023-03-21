<script setup>
import { reactive } from 'vue';
import { cardService } from './../module/cardService';
import { getLastRepetitionDate, getCardQuantityByLevelMap, getLevelToRepeat } from './../module/repetitionService';

let context = reactive({
    cardQuantityByLevelMap: getCardQuantityByLevelMap(),
    levelToRepeat: getLevelToRepeat(),
    cardsToRepeat: cardService.getCardsByLevel(getLevelToRepeat()),
    cardToRepeat: cardService.getCardsByLevel(getLevelToRepeat())[0],
    answerHidden: true
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

function submitAnswer(levelDelta) {
    cardService.moveCardToLevelDelta(context.cardToRepeat, context.levelToRepeat, levelDelta);
    update();
}

function update() {
    context.cardQuantityByLevelMap = getCardQuantityByLevelMap();
    context.answerHidden = true;
    context.cardsToRepeat = cardService.getCardsByLevel(getLevelToRepeat());
    context.cardToRepeat =  context.cardsToRepeat[0];
}
</script>
<template>
    <div>
        <p>Current repetition level: {{ context.levelToRepeat }}</p>
        <p>Card to repeat today: {{ context.cardsToRepeat.length }}</p>
    </div>
    <div>
        <p>Last repetition date: {{ getLastRepetitionDate() }}</p>
    </div>
    <div>
        <h3>New card</h3>
        <form>
            <p>Question:</p>
            <input v-model="cardForm.question" type="text">
            <p>Answer:</p>
            <input v-model="cardForm.answer" type="text">
        </form>
        <button @click="saveCard()">Save</button>        
    </div>
    <div>
        <hr/>
        <h3>Repetition</h3>
        <div v-if="context.cardToRepeat != undefined">
            <p>Question:</p>
            <p>{{ context.cardToRepeat.question }}</p>
            <button @click="context.answerHidden = false">Show answer</button>
            <div v-if="!context.answerHidden">
                <p>Answer:</p>
                <p>{{ context.cardToRepeat.answer }}</p>
                <button @click="submitAnswer(1)">Right</button>
                <button @click="submitAnswer(-1)">Wrong</button>
            </div>
        </div>
        <div v-else>
            <p>No cards to repeat today</p>
        </div>
        <hr/>
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