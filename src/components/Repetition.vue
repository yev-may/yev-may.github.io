<script setup>
import {onMounted, reactive, ref} from "vue";
import {getCardToRepeat, submitRightAnswer, submitWrongAnswer} from "../module/repetitionService";

const cardToRepeat = reactive({
  id: null,
  question: null,
  answer: null
})

const answerShown = ref(false);

function updateCardToRepeat() {
  const foundCard = getCardToRepeat();
  if(foundCard) {
    cardToRepeat.id = foundCard.id;
    cardToRepeat.question = foundCard.question;
    cardToRepeat.answer = foundCard.answer;
  } else {
    cardToRepeat.id = null;
  }
}

function submitAnswer(isRight) {
  isRight ? submitRightAnswer(cardToRepeat.id) : submitWrongAnswer(cardToRepeat.id);
  updateCardToRepeat();
}

onMounted(() => updateCardToRepeat());
</script>

<template>
  <p>Repetition</p>

  <div v-if="cardToRepeat.id">
    <p>{{ cardToRepeat.question }}</p>

    <div v-if="!answerShown">
      <button @click="answerShown = true">Show answer</button>
    </div>

    <div v-if="answerShown">
      <p>{{ cardToRepeat.answer }}</p>
    </div>

    <div v-if="answerShown">
      <button @click="submitAnswer(true)">Right</button>
      <button @click="submitAnswer(false)">Wrong</button>
    </div>
  </div>

  <div v-if="!cardToRepeat.id">
    <p>No card to repeat</p>
  </div>
</template>

<style scoped>

</style>