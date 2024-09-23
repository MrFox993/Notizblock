let notes = ["brush teeth", "style hair", "drink coffee"];
let notesTitles = ["routine", "routine", "routine"];
let archivNotes = [];
let archivNotesTitles = [];
let trashNotes = [];
let trashNotesTitles = [];

function renderNotes() {
  getFromLocalStorage();
  let notesContentRef = document.getElementById("notes_content");
  notesContentRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    notesContentRef.innerHTML += getNoteHTMLTemplate(indexNote);
  }
}

function renderArchivNotes() {
    let archivNotesContentRef = document.getElementById("archiv_content");
    archivNotesContentRef.innerHTML = "";
    for (
      let indexArchivNote = 0;
      indexArchivNote < archivNotes.length;
      indexArchivNote++
    ) {
      archivNotesContentRef.innerHTML += getArchivNoteHTMLTemplate(indexArchivNote);
    }
  }

function renderTrashNotes() {
    let trashNotesContentRef = document.getElementById("trash_content");
    trashNotesContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashNotesContentRef.innerHTML += getTrashNoteHTMLTemplate(indexTrashNote);
    }
}

function addNote() {
  let noteUserInputRef = document.getElementById("noteInput");
  let noteUserInput = noteUserInputRef.value;
  let noteTitleUserInputRef = document.getElementById("noteTitleInput");
  let noteTitleUserInput = noteTitleUserInputRef.value;

  if (noteUserInput != "") {
    notes.push(noteUserInput);
    notesTitles.push(noteTitleUserInput);
  }
  saveToLocalStorage();
  renderNotes();

  noteUserInputRef.value = "";
  noteTitleUserInputRef.value = "";
}

function archiveNote(indexNote) {
  let archivNote = notes.splice(indexNote, 1);
  let archivNoteTitle = notesTitles.splice(indexNote, 1);
  archivNotes.push(archivNote[0]);
  archivNotesTitles.push(archivNoteTitle[0]);
  saveToLocalStorage();
  renderArchivNotes();
  renderNotes();
}

function fromNotesMoveToTrashNote(indexNote) {
    let TrashNote = notes.splice(indexNote, 1);
    let TrashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotes.push(TrashNote[0]);
    trashNotesTitles.push(TrashNoteTitle[0]);    
    saveToLocalStorage();
    renderTrashNotes();
    renderNotes();
}

function fromArchivMoveToTrashNote(indexNote) {
    let TrashNote = archivNotes.splice(indexNote, 1);
    let TrashNoteTitle = archivNotesTitles.splice(indexNote, 1);
    trashNotes.push(TrashNote[0]);
    trashNotesTitles.push(TrashNoteTitle[0]);    
    saveToLocalStorage();
    renderTrashNotes();
    renderArchivNotes();
}

function fromArchivMoveToNotes(indexNote) {
    let note = archivNotes.splice(indexNote, 1);
    let noteTitle = archivNotesTitles.splice(indexNote, 1);
    notes.push(note[0]);
    notesTitles.push(noteTitle[0]);    
    saveToLocalStorage();
    renderArchivNotes();
    renderNotes();
}

function fromTrashMoveToNotes(indexNote) {
    let note = trashNotes.splice(indexNote, 1);
    let noteTitle = trashNotesTitles.splice(indexNote, 1);
    notes.push(note[0]);
    notesTitles.push(noteTitle[0]);    
    saveToLocalStorage();
    renderTrashNotes();
    renderNotes();
}

function deleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNotesTitles.splice(indexTrashNote, 1);
  renderTrashNotes();
  renderNotes();
}

function renderTrashNotes() {
  let trashNotesContentRef = document.getElementById("trash_content");
  trashNotesContentRef.innerHTML = "";
  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    const singleNote = notes[indexTrashNote];
    trashNotesContentRef.innerHTML += getTrashNoteHTMLTemplate(indexTrashNote);
  }
}

function saveToLocalStorage() {
  let notesTitlesJSON = JSON.stringify(notesTitles);
  let notesJSON = JSON.stringify(notes);
  localStorage.setItem("Titles", notesTitlesJSON);
  localStorage.setItem("Notes", notesJSON);
}

function getFromLocalStorage() {
  let notesTitlesJSON = localStorage.getItem("Titles");
  let notesJSON = localStorage.getItem("Notes");
  let notesTitlesArray = JSON.parse(notesTitlesJSON);
  let notesArray = JSON.parse(notesJSON);

  if (notesArray.length > 0) {
    notes = notesArray;
    notesTitles = notesTitlesArray;
  }
}
