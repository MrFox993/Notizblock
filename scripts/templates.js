function getNoteHTMLTemplate(indexNote) {
  return `    <div class="single_note">
                <h3>${allNotes.notesTitles[indexNote]}</h3>
                <div class="note_content">
                    <p>- ${allNotes.notes[indexNote]}</p>
                    <div class="single_note_buttons">
                    <button onclick="moveNote(${indexNote}, 'notes', 'archivNotes')" class="archive_button">
                    archiv
                    </button>
                    <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="trash_button">trash</button>
                </div>
                </div>
                </div>`;
}

function getArchivNoteHTMLTemplate(indexNote) {
  return `  <div class="single_note">
                <h3>${allNotes.archivNotesTitles[indexNote]}</h3>
                <div class="note_content">
                    <p>- ${allNotes.archivNotes[indexNote]}</p>
                    <div class="single_note_buttons">
                    <button onclick="moveNote(${indexNote}, 'archivNotes', 'notes')" class="note_button">
                    notes
                    </button>
                    <button onclick="moveNote(${indexNote}, 'archivNotes', 'trashNotes')" class="trash_button">trash</button>
                </div>
                </div>
                </div>`;
}

function getTrashNoteHTMLTemplate(indexNote) {
  return `  <div class="single_note">
                <h3>${allNotes.trashNotesTitles[indexNote]}</h3>
                <div class="note_content">
                    <p>- ${allNotes.trashNotes[indexNote]}</p>
                    <div class="single_note_buttons">
                    <button onclick="moveNote(${indexNote}, 'trashNotes', 'notes')" class="note_button">
                    notes
                    </button>
                    <button onclick="deleteNote(${indexNote})" class="delete_button">delete</button>
                </div>
                </div>
                </div>`;
}
