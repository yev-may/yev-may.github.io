export const cardService = {

    moveCardToLevelDelta(card, currentLevel, levelDelta) {
        let cards = this.getCardsByLevel(currentLevel);
        cards = cards.filter(item => item.question != card.question);
        localStorage.setItem(currentLevel, JSON.stringify(cards));
        let newLevel = currentLevel + levelDelta >= 0 ? currentLevel + levelDelta : 0;
        this.saveCard(card, newLevel);
    },

    saveCard(card, level) {
        const cards = this.getCardsByLevel(level);
        cards.push(card);
        localStorage.setItem(level, JSON.stringify(cards));
    },
    
    getCardsByLevel(level) {
        const cards = localStorage.getItem(level);
        return cards != null ? JSON.parse(cards) : [];
    }
}
