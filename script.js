let notes = ["brush teeth", "style hair", "drink coffee"];
let notesTitles = ["routine", "routine", "routine"];
let archivNotes = [];
let archivNotesTitles = [];
let trashNotes = [];
let trashNotesTitles = [];

let allNotes = {
  notes: ["brush teeth", "style hair", "drink coffee"],
  notesTitles: ["routine", "routine", "routine"],
  archivNotes: [],
  archivNotesTitles: [],
  trashNotes: [],
  trashNotesTitles: [],
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

function archiveNote(indexNote) {
  let archivNote = allNotes.notes.splice(indexNote, 1);
  let archivNoteTitle = allNotes.notesTitles.splice(indexNote, 1);
  allNotes.archivNotes.push(archivNote[0]);
  allNotes.archivNotesTitles.push(archivNoteTitle[0]);
  saveToLocalStorage();
  renderArchivNotes();
  renderNotes();
}

function fromNotesMoveToTrashNote(indexNote) {
  let TrashNote = allNotes.notes.splice(indexNote, 1);
  let TrashNoteTitle = allNotes.notesTitles.splice(indexNote, 1);
  allNotes.trashNotes.push(TrashNote[0]);
  allNotes.trashNotesTitles.push(TrashNoteTitle[0]);
  saveToLocalStorage();
  renderTrashNotes();
  renderNotes();
}

function fromArchivMoveToTrashNote(indexNote) {
  let TrashNote = allNotes.archivNotes.splice(indexNote, 1);
  let TrashNoteTitle = allNotes.archivNotesTitles.splice(indexNote, 1);
  allNotes.trashNotes.push(TrashNote[0]);
  allNotes.trashNotesTitles.push(TrashNoteTitle[0]);
  saveToLocalStorage();
  renderTrashNotes();
  renderArchivNotes();
}

function fromArchivMoveToNotes(indexNote) {
  let note = allNotes.archivNotes.splice(indexNote, 1);
  let noteTitle = allNotes.archivNotesTitles.splice(indexNote, 1);
  allNotes.notes.push(note[0]);
  allNotes.notesTitles.push(noteTitle[0]);
  saveToLocalStorage();
  renderArchivNotes();
  renderNotes();
}

function fromTrashMoveToNotes(indexNote) {
  let note = allNotes.trashNotes.splice(indexNote, 1);
  let noteTitle = allNotes.trashNotesTitles.splice(indexNote, 1);
  allNotes.notes.push(note[0]);
  allNotes.notesTitles.push(noteTitle[0]);
  saveToLocalStorage();
  renderTrashNotes();
  renderNotes();
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  renderTrashNotes();
  renderNotes();
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
