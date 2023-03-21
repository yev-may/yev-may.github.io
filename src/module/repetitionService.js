import { cardService } from './cardService';

const MAX_REPETITION_LEVEL = 7;

export function getLevelToRepeat() {
    const savedLevel = getLastRepetitionLevel();
    const saveDate = getLastRepetitionDate() ?? new Date();
    return datesAreOnSameDay(new Date(), saveDate)
        ? savedLevel
        : savedLevel + 1;
}

function datesAreOnSameDay (first, second) {
    return first.getFullYear() === second.getFullYear()
        && first.getMonth() === second.getMonth()
        && first.getDate() === second.getDate();
}

export function updateLastRepetitionDate() {
    localStorage.setItem('lastRepetitionDate', new Date());
}

export function getLastRepetitionLevel() {
    const savedLevel = localStorage.getItem('lastRepetitionLevel');
    return savedLevel ?? 0
}

export function getLastRepetitionDate() {
    return localStorage.getItem('lastRepetitionDate');;
}

export function getCardQuantityByLevelMap() {
    const result = new Map();
    for(let i = 0; i <= MAX_REPETITION_LEVEL; ++i) {
        result.set(i, cardService.getCardsByLevel(i).length);
    }
    console.log(result);
    return result;
}