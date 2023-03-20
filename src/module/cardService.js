
export function saveCard(card, level) {
    const cards = getCardsByLevel(level);
    cards.push(card);
    localStorage.setItem(level, JSON.stringify(cards));
}

export function getCardsByLevel(level) {
    const cards = localStorage.getItem(level);
    return cards != null ? JSON.parse(cards) : [];
}