
function getEpochTimeInSeconds() {
    return Math.floor(Date.now() / 1000);
}

function formatEpochTime(epochTime) {
    const date = new Date(epochTime * 1000); // Convert to milliseconds
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

/* ==================================================================
 * Set Note To Local Storage
 *  sets the note being edited to local storage
 * ================================================================== */
function setNoteLocalStorage(noteData) {
    localStorage.setItem("currentNote", JSON.stringify(noteData));
}

/* ==================================================================
 * Get Note From Local Storage
 *  gets the note being edited to local storage
 * ================================================================== */
function getNoteLocalStorage() {
    return JSON.parse(localStorage.getItem("currentNote"));
}

export {
    getEpochTimeInSeconds,
    formatEpochTime,
    setNoteLocalStorage,
    getNoteLocalStorage,
}
