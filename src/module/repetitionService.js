import { getCardsByLevel } from './cardService';

const MAX_REPETITION_LEVEL = 7;

export function getCardToRepeatToday() {
    return getCardsByLevel(0);
}

export function updateLastRepetitionDate() {
    localStorage.setItem('lastRepetitionDate', new Date());
}

export function getLastRepetitionDate() {
    const savedDate = localStorage.getItem('lastRepetitionDate');
    return savedDate != null ?
        savedDate : 'Never';
}