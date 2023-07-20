export function saveCard(cardForm) {
    cardForm.creationDate = new Date();
    const cards = getCards();
    cards.push(cardForm)
    saveCards(cards);
}

export function deleteCard(question) {
    const cards = getCards().filter(card => card.question !== question);
    saveCards(cards);
}

export function getCards() {
    const cards = localStorage.getItem("cards");
    return cards ? JSON.parse(cards) : [];
}

export function saveCards(cards) {
    return localStorage.setItem("cards", JSON.stringify(cards));
}