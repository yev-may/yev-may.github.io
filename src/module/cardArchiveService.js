import {deleteCard} from "./cardService";

export function moveCardToArchive(card) {
    const cardArchive = getCardArchive();
    cardArchive.push(card);
    saveCardArchive(cardArchive);
    deleteCard(card.id);
}

function getCardArchive() {
    const archive = localStorage.getItem("cardArchive");
    return archive ? JSON.parse(archive) : [];
}

function saveCardArchive(cards) {
    localStorage.setItem("cardArchive", JSON.stringify(cards));
}