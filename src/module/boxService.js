
export function getBoxes() {
    return getBoxIds()
        .map(boxId => localStorage.getItem('box_' + boxId))
        .map(boxJson => JSON.parse(boxJson));
}

export function save(cardBox) {
    const boxId = getNextId();
    cardBox.id = boxId;
    localStorage.setItem('box_' + boxId, JSON.stringify(cardBox));
    addBoxId(boxId);
}

function getNextId() {
    let lastId = +localStorage.getItem('lastBoxId');
    localStorage.setItem('lastBoxId', ++lastId);
    return lastId;
}

function addBoxId(boxId) {
    const boxIds = getBoxIds();
    boxIds.push(boxId);
    saveBoxIds(boxIds);
}

function getBoxIds() {
    const boxIds = JSON.parse(localStorage.getItem('boxIds'));
    return boxIds != null ? boxIds : [];
}

function saveBoxIds(boxIds) {
    localStorage.setItem('boxIds', JSON.stringify(boxIds));
}