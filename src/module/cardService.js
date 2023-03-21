export const cardService = {
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
