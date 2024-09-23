function getNoteHTMLTemplate(indexNote) {
  return `    <div class="single_note">
                <h3>${notesTitles[indexNote]}</h3>
                <div class="note_content">
                    <p>- ${notes[indexNote]}</p>
                    <div class="single_note_buttons">
                    <button onclick="archiveNote(${indexNote})" class="archive_button">
                    archiv
                    </button>
                    <button onclick="fromNotesMoveToTrashNote(${indexNote})" class="trash_button">trash</button>
                </div>
                </div>
                </div>`;
}

function getArchivNoteHTMLTemplate(indexArchivNote) {
  return `  <div class="single_note">
                <h3>${archivNotesTitles[indexArchivNote]}</h3>
                <div class="note_content">
                    <p>- ${archivNotes[indexArchivNote]}</p>
                    <div class="single_note_buttons">
                    <button onclick="fromArchivMoveToNotes(${indexArchivNote})" class="note_button">
                    notes
                    </button>
                    <button onclick="fromArchivMoveToTrashNote(${indexArchivNote})" class="trash_button">trash</button>
                </div>
                </div>
                </div>`;
}

function getTrashNoteHTMLTemplate(indexTrashNote) {
  return `  <div class="single_note">
                <h3>${trashNotesTitles[indexTrashNote]}</h3>
                <div class="note_content">
                    <p>- ${trashNotes[indexTrashNote]}</p>
                    <div class="single_note_buttons">
                    <button onclick="fromTrashMoveToNotes(${indexTrashNote})" class="note_button">
                    notes
                    </button>
                    <button onclick="deleteNote(${indexTrashNote})" class="delete_button">delete</button>
                </div>
                </div>
                </div>`;
}
