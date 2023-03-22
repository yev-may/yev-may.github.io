const MAX_REPETITION_LEVEL = 7;
const MIN_REPETITION_LEVEL = 1;

export function getLevelToRepeat() {
    const savedLevel = getLastRepetitionLevel();
    const savedDate = getLastRepetitionDate() ?? new Date();
    return datesAreOnSameDay(new Date(), savedDate)
        ? +savedLevel : +savedLevel + 1;
}

function datesAreOnSameDay(first, second) {
    return first.getFullYear() === second.getFullYear()
        && first.getMonth() === second.getMonth()
        && first.getDate() === second.getDate();
}

export function getLastRepetitionLevel() {
    return localStorage.getItem('lastRepetitionLevel') ?? MIN_REPETITION_LEVEL;
}

export function updateLastRepetitionLevel(level) {
    level = level > MAX_REPETITION_LEVEL ? MIN_REPETITION_LEVEL : level;
    localStorage.setItem('lastRepetitionLevel', level);
}

export function getLastRepetitionDate() {
    return new Date(JSON.parse(localStorage.getItem('lastRepetitionDate')));
}

export function updateLastRepetitionDate() {
    localStorage.setItem('lastRepetitionDate', JSON.stringify(new Date()));
}