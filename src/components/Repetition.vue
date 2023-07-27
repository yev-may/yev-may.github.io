<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from 'primevue/divider';
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
    <div class="view_container vertical-space-between">

      <Card v-if="!cardToRepeat.id">
        <template #content>
          <p>No cards to repeat</p>
        </template>
      </Card>

      <Card v-if="cardToRepeat.id">
        <template #content>
          <div class="card-side card-question">
            <p>{{ cardToRepeat.question }}</p>
          </div>
          <div class="card-side card-answer" v-if="answerShown">
            <Divider/>
            <p>{{ cardToRepeat.answer }}</p>
          </div>
        </template>
      </Card>

      <div class="card-action" v-if="cardToRepeat.id">
        <div class="card-action_section" v-if="!answerShown">
          <Button label="Show answer" @click="answerShown = true" />
        </div>
        <div class="inline-buttons answer-result" v-if="answerShown">
          <Button label="Wrong" class="wrong-answer-result" @click="submitAnswer(false)"/>
          <Button label="Right" class="right-answer-result" @click="submitAnswer(true)"/>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.wrong-answer-result {
  background-color: #FFEDED;
}
.right-answer-result {
  background-color: #EEFFED;
}
</style>