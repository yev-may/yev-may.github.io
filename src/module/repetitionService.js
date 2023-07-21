import {getCard, getCards, updateCard} from "./cardService";
import {getSettings} from "./settingsService";

export function getCardToRepeat() {
    const now = JSON.parse(JSON.stringify(new Date()));
    const cards = getCards();
    return cards.find(card => card.nextRepetitionDate < now);
}

export function submitRightAnswer(cardId) {
    const card = getCard(cardId);
    card.nextRepetitionDate = getNextRepetitionDate(card.level);
    card.level = card.level + 1;
    updateCard(card);
}

export function submitWrongAnswer(cardId) {
    const card = getCard(cardId);
    card.level = 0
    card.nextRepetitionDate = getNextRepetitionDate(card.level);
    updateCard(card);
}

function getNextRepetitionDate(level) {
    const date = new Date();
    const delayMinutes = getDelayForLevel(level);
    date.setMinutes(date.getMinutes() + delayMinutes );
    return date;
}

function getDelayForLevel(level) {
    return +getSettings()[level];
}


