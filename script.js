let allNotes = {
  'notes': ["brush teeth", "style hair", "drink coffee"],
  'notesTitles': ["routine", "routine", "routine"],
  'archivNotes': [],
  'archivNotesTitles': [],
  'trashNotes': [],
  'trashNotesTitles': [],
};

function renderNotes() {
  getFromLocalStorage();
  let notesContentRef = document.getElementById("notes_content");
  notesContentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    notesContentRef.innerHTML += getNoteHTMLTemplate(indexNote);
  }
}

function renderArchivNotes() {
  let archivNotesContentRef = document.getElementById("archiv_content");
  archivNotesContentRef.innerHTML = "";
  for (
    let indexArchivNote = 0;
    indexArchivNote < allNotes.archivNotes.length;
    indexArchivNote++
  ) {
    archivNotesContentRef.innerHTML +=
      getArchivNoteHTMLTemplate(indexArchivNote);
  }
}

function renderTrashNotes() {
  let trashNotesContentRef = document.getElementById("trash_content");
  trashNotesContentRef.innerHTML = "";
  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashNotesContentRef.innerHTML += getTrashNoteHTMLTemplate(indexTrashNote);
  }
}

function addNote() {
  let noteUserInputRef = document.getElementById("noteInput");
  let noteUserInput = noteUserInputRef.value;
  let noteTitleUserInputRef = document.getElementById("noteTitleInput");
  let noteTitleUserInput = noteTitleUserInputRef.value;

  if (noteUserInput != "") {
    allNotes.notes.push(noteUserInput);
    allNotes.notesTitles.push(noteTitleUserInput);
  }
  saveToLocalStorage();
  renderNotes();

  noteUserInputRef.value = "";
  noteTitleUserInputRef.value = "";
}


function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(noteTitle[0]);


    saveToLocalStorage();
    renderTrashNotes();
    renderArchivNotes();
    renderNotes();
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  renderTrashNotes();
  renderNotes();
}

function saveToLocalStorage() {
  let notesTitlesJSON = JSON.stringify(allNotes.notesTitles);
  let notesJSON = JSON.stringify(allNotes.notes);
  localStorage.setItem("Titles", notesTitlesJSON);
  localStorage.setItem("Notes", notesJSON);
}

function getFromLocalStorage() {
  let notesTitlesJSON = localStorage.getItem("Titles");
  let notesJSON = localStorage.getItem("Notes");
  let notesTitlesArray = JSON.parse(notesTitlesJSON);
  let notesArray = JSON.parse(notesJSON);

  if (notesArray.length > 0) {
    allNotes.notes = notesArray;
    allNotes.notesTitles = notesTitlesArray;
  }
}
