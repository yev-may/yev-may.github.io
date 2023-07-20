export function saveCard(card) {
    card.id = generateCardId();
    card.creationDate = new Date();

    const cards = getCards();
    cards.push(card)
    saveCards(cards);
}

export function updateCard(updateCard) {
    let cards = getCards().filter(card => card.id !== updateCard.id);
    cards.push(updateCard);
    saveCards(cards);
}

export function deleteCard(cardId) {
    const cards = getCards().filter(card => card.id !== cardId);
    saveCards(cards);
}

export function getCards() {
    const cards = localStorage.getItem("cards");
    return cards ? JSON.parse(cards) : [];
}

export function saveCards(cards) {
    return localStorage.setItem("cards", JSON.stringify(cards));
}

function generateCardId() {
    let lastCardId = localStorage.getItem("lastCardId")
    let newCarId = lastCardId ? +lastCardId + 1 : 0;
    localStorage.setItem("lastCardId", newCarId);
    return newCarId;
}