import {getCard, getCards, updateCardRepetitionInfo} from "./cardService";
import {getDelayForLevel} from "./settingsService";
import {moveCardToArchive} from "./cardArchiveService";

export function getCardToRepeat() {
    const now = JSON.parse(JSON.stringify(new Date()));
    const cards = getCards();
    return cards.find(card => card.nextRepetitionDate < now);
}

export function submitRightAnswer(cardId) {
    const card = getCard(cardId);
    const nextLevel = card.level + 1;
    const nextLevelDelay = getDelayForLevel(nextLevel);
    if(nextLevelDelay) {
        card.nextRepetitionDate = getNextRepetitionDate(card.level);
        card.level = nextLevel;
        updateCardRepetitionInfo(card);
    } else {
        moveCardToArchive(card);
    }
}

export function submitWrongAnswer(cardId) {
    const card = getCard(cardId);
    card.level = 0
    card.nextRepetitionDate = getNextRepetitionDate(card.level);
    updateCardRepetitionInfo(card);
}

function getNextRepetitionDate(level) {
    const date = new Date();
    const delayMinutes = getDelayForLevel(level);
    date.setMinutes(date.getMinutes() + delayMinutes );
    return date;
}
