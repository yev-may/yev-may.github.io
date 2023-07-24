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
  answerShown.value = false;
  updateCardToRepeat();
}

onMounted(() => updateCardToRepeat());
</script>

<template>
  <div class="view">
    <div class="view_container">

      <div class="info-alert" v-if="!cardToRepeat.id">
        <p>No cards to repeat</p>
      </div>

      <div class="card" v-if="cardToRepeat.id">
        <div class="card-side card-question">
          <p>{{ cardToRepeat.question }}</p>
        </div>
        <div class="card-side card-answer" v-if="answerShown">
          <p>{{ cardToRepeat.answer }}</p>
        </div>
      </div>

      <div class="card-controller" v-if="cardToRepeat.id">
        <div class="card-controller_section show-answer" v-if="!answerShown">
          <button @click="answerShown = true">Show answer</button>
        </div>
        <div class="card-controller_section answer-result" v-if="answerShown">
          <button class="wrong-answer-result" @click="submitAnswer(false)">Wrong</button>
          <button class="right-answer-result" @click="submitAnswer(true)">Right</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.card-side {
  text-align: center;
  border: 1px solid black;
  padding: 15px;
}
.card-question {

}
.card-answer {
  border-top: 0;
}

.card-controller_section {
  display: flex;
  justify-content: space-between;
}

.show-answer button {
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.answer-result button {
  width: 245px;
  margin-top: 10px;
}

.wrong-answer-result {
  background-color: #FFEDED;
}
.right-answer-result {
  background-color: #EEFFED;
}
</style>