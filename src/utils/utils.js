
/* ==================================================================
 * CLEAR INPUT
 * ================================================================== */
function clearInput(inputId) {
  const inputElement = document.getElementById(inputId);
  if (inputElement) {
    inputElement.value = '';
  }
}

function getNotesFromLocalStorage() {
    const noteListString = localStorage.getItem('noteList');

    if (noteListString) {
        return JSON.parse(noteListString);
    }

    return null;
}

function setNotesLocalStorage(item) {
    let noteList = []

    if (localStorage.getItem("noteList") != null) {
        noteList = JSON.parse(localStorage.getItem("noteList"));
    }

    noteList.push(item);
    localStorage.setItem("noteList", JSON.stringify(noteList))
}

function deleteNoteFromLocal(noteID) {
    let noteList = getNotesFromLocalStorage()

    const filteredArray = noteList.filter(item => item.id !== noteID);
    localStorage.setItem("noteList", JSON.stringify(filteredArray))
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

export {
    clearInput,
    setNotesLocalStorage,
    getNotesFromLocalStorage,
    deleteNoteFromLocal,
    getEpochTimeInSeconds,
    formatEpochTime,
}
