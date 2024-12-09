
/* ==================================================================
 * CLEAR INPUT
 * ================================================================== */
function clearInput(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.value = '';
    }
}

/* ==================================================================
 * Epoch Time in seconds
 * ================================================================== */
function getEpochTimeInSeconds() {
    return Math.floor(Date.now() / 1000);
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

/* ==================================================================
 * Validate Note Data
 *      Validate user input for a note return true if valid false if invalid
 *      1 = js error
 *      2 = date consistency error
 *      3 = due date error
 * ================================================================== */
function validateNoteData(data) {

    // blank is a valid state
    if (data.dateAdded !== "" && data.dueDate !== "") {
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // date should match DD/MM/YYYY

        // added Date check
        if (!dateRegex.test(data.dateAdded)) {
            return 1;
        }
        // due date check
        if (!dateRegex.test(data.dueDate)) {
            return 3;
        }
    }

    const dateAddedMs = new Date(data.dateAdded).getTime(); // in milisecs

    // BUG: not quite working yet
    //// Date consistency -- dateAdded / dateAddedEpoch verification
    //if (Math.abs(dateAddedMs - data.dateAddedEpoch) > 1000 || !data.dateAddedEpoch || !data.dateAdded) {
    //    //return 2;
    //}

    // Due date is in the future
    const dueDateMs = new Date(data.dueDate).getTime(); // in milisecs
    if (dueDateMs <= dateAddedMs) {
        return 3;
    }

    return 0;
}

/* ==================================================================
 * Format Date
 * ================================================================== */
function formateData(data) {
    // set all undefined to empty string
    if (data.dateAddedEpoch === undefined) {data.dateAddedEpoch = ""}
    if (data.dueDate === undefined) {data.dueDate = ""}
    if (data.title === undefined) {data.title = ""}
    if (data.text === undefined) {data.text = ""}

    return data;
}

export {
    clearInput,
    getEpochTimeInSeconds,
    setNoteLocalStorage,
    getNoteLocalStorage,
    clearNoteLocalStorage,
    getThemeFromLocalStorage,
    validateNoteData,
    formateData,
}
