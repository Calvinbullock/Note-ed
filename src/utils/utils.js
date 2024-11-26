
/* ==================================================================
 * CLEAR INPUT
 * ================================================================== */
function clearInput(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = '';
    }
}

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

/* ==================================================================
 * Clear Note From Local Storage
 *  clears the note being edited to local storage
 * ================================================================== */
function clearNoteLocalStorage() {
    localStorage.setItem("currentNote", JSON.stringify({}));
}

/* ==================================================================
 * GET THEME FOR LOCAL STORAGE
 *      is used to keep the theme set on page refresh
 * ================================================================== */
function getThemeFromLocalStorage() {
    let theme = localStorage.getItem('theme');

    if (theme == null || theme === "light-theme") {
        theme = "light-theme";
        document.body.classList.remove("dark-theme");
    } else {
        document.body.classList.add("dark-theme");
    }

    return theme;
}

export {
    clearInput,
    getEpochTimeInSeconds,
    formatEpochTime,
    setNoteLocalStorage,
    getNoteLocalStorage,
    clearNoteLocalStorage,
    getThemeFromLocalStorage,
}
