

const input = document.querySelector('.get-note');
const addNoteBtn = document.querySelector('#add-btn');
addNoteBtn.addEventListener("click", addNewNote);

const color = document.querySelector('.get-color');
const notesList = document.querySelector('.notes-list');
const allNotes = [];

function addNewNote() {

    let newNote = {
        note: input.value,
        noteColor: color.value

    };

    console.log(newNote);

    input.value = "";

    allNotes.push(newNote);
    displayNotes(allNotes);


}


function displayNotes(notes) {
    notesList.innerHTML = "";
    notes.forEach(element => {
       let noteHTML= `
        <div class="note" style="background-color:${element.noteColor};">
${element.note}
<div>
<img src="icons/bin.png" class="bin-icon">
</div>
        </div>
        
        `;

        notesList.insertAdjacentHTML('afterbegin',noteHTML);

    });
}