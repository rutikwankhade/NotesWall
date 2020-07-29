
const input = document.querySelector('.get-note');
const addNoteBtn = document.querySelector('#add-btn');
addNoteBtn.addEventListener("click", addNewNote);
const allNotes = [];

const color = document.querySelector('.get-color');
const notesList = document.querySelector('.notes-list');

document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        addNewNote();
    }
})

function addNewNote() {
    if (input.value) {
        let newNote = {
            note: input.value,
            noteColor: color.value

        };
        allNotes.push(newNote);
    }
    else {
        alert("A note can't be empty.");

    }
   


    // console.log(newNote);

    input.value = "";
    input.focus();
    
    displayNotes(allNotes);

    
   
}


function displayNotes(notes) {
    notesList.innerHTML = " ";
    notes.forEach(element => {
       let noteHTML= `
        <div class="note" style="background-color:${element.noteColor};">
            <div class="note-view">
                ${element.note}
            </div>
            <div>
                <a class="deleteBtn"><img src="icons/bin.png" class="bin-icon"></a>
            </div>
        </div>
        `;

        notesList.insertAdjacentHTML('afterbegin', noteHTML);
        
        const deleteBtn = document.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', e => { deleteNote(e,element);})


    });
}


function deleteNote(e,element) {
    let item = e.target.parentElement.parentElement.parentElement;
    // console.log(item);
    item.parentNode.removeChild(item);
    // console.log(element)
    allNotes.pop(element);
    
}

