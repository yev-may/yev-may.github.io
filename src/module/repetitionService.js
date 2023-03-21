import { cardService } from './cardService';

export function getLevelToRepeat() {
    const savedLevel = getLastRepetitionLevel();
    const saveDate = getLastRepetitionDate() ?? new Date();
    return datesAreOnSameDay(new Date(), saveDate)
        ? savedLevel
        : savedLevel + 1;
}

function datesAreOnSameDay(first, second) {
    return first.getFullYear() === second.getFullYear()
        && first.getMonth() === second.getMonth()
        && first.getDate() === second.getDate();
}

export function getLastRepetitionLevel() {
    const savedLevel = localStorage.getItem('lastRepetitionLevel');
    return savedLevel ?? 0
}

export function updateLastRepetitionLevel(level) {
    localStorage.setItem('lastRepetitionLevel', level);
}

export function getLastRepetitionDate() {
    return new Date(JSON.parse(localStorage.getItem('lastRepetitionDate')));
}

export function updateLastRepetitionDate() {
    localStorage.setItem('lastRepetitionDate', JSON.stringify(new Date()));
}