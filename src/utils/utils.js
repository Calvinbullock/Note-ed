
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

export { 
    setNotesLocalStorage, 
    getNotesFromLocalStorage, 
    deleteNoteFromLocal,
    getEpochTimeInSeconds,
}
