const MAX_REPETITION_LEVEL = 7;
const MIN_REPETITION_LEVEL = 1;
const NEVER_REPETEAD_LEVEL = 0;

export const cardService = {

    moveCardToLevelDelta(card, currentLevel, levelDelta) {
        let newCards = this.getCardsByLevel(NEVER_REPETEAD_LEVEL);
        let isCardNew = newCards.filter(item => item.question === card.question).length > 0;
        if(isCardNew) {
            currentLevel = NEVER_REPETEAD_LEVEL;
        }

        let cards = this.getCardsByLevel(currentLevel);
        cards = cards.filter(item => item.question != card.question);
        localStorage.setItem(currentLevel, JSON.stringify(cards));

        let newLevel = currentLevel + levelDelta;
        newLevel = newLevel < NEVER_REPETEAD_LEVEL ? NEVER_REPETEAD_LEVEL : newLevel;
        newLevel = newLevel > MAX_REPETITION_LEVEL ? MIN_REPETITION_LEVEL : newLevel;
        this.saveCard(card, +newLevel);
    },

    saveCard(card, level) {
        const cards = this.getCardsByLevel(level);
        cards.push(card);
        localStorage.setItem(level, JSON.stringify(cards));
    },
    
    getCardsToRepeat(level) {
        const newCards = this.getCardsByLevel(NEVER_REPETEAD_LEVEL);
        const cardsOnLevel = this.getCardsByLevel(level);
        return newCards.concat(cardsOnLevel);
    },

    getCardsByLevel(level) {
        const cards = localStorage.getItem(level);
        return cards != null ? JSON.parse(cards) : [];
    },

    getCardQuantityByLevelMap() {
        const result = new Map();
        for(let i = 0; i <= MAX_REPETITION_LEVEL; ++i) {
            result.set(i, this.getCardsByLevel(i).length);
        }
        console.log(result);
        return result;
    }
}
