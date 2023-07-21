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
  }
}

onMounted(() => {
  updateCardToRepeat()
  console.log("Rep component created!")
});
</script>

<template>
  <p>Card to repeat</p>

  <div class="repetition_view">

    <div class="card">
      <div class="card_question">
        <p>{{ cardToRepeat.question }}</p>
      </div>

      <div class="card_shown-answer_button" v-if="!answerShown">
        <button @click="answerShown = true">Show answer</button>
      </div>

      <div class="card_answer" v-if="answerShown">
        <p>{{ cardToRepeat.answer }}</p>
      </div>

      <div class="cars_submit-answer-result" v-if="answerShown">
        <button @click="submitRightAnswer(cardToRepeat.id)">Right</button>
        <button @click="submitWrongAnswer(cardToRepeat.id)">Wrong</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>