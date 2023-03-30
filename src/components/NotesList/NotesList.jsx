import React from "react";
import Note from "../Note";
import AddNote from "../AddNote";
const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {

    return (
        <div className="notes-list">
            <AddNote handleAddNote={handleAddNote} />
            {notes.map((note) => (<Note text={note.text} date={note.date} id={note.id} handleDeleteNote={handleDeleteNote} />))}

        </div>
    )
}
export default NoteList;