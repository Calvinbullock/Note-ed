
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

export { setNotesLocalStorage, getNotesFromLocalStorage }
