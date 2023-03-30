import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [notetext, setnotetext] = useState('');
    const handleChange = (event) => {
        setnotetext(event.target.value);
    }
    const handleSaveClick = () => {
        if (notetext.trim().length > 0) {
            handleAddNote(notetext);
            setnotetext('');
        }

    }
    return (
        <div className="note new">
            <textarea rows="8" cols="10" placeholder='add a new note.' onChange={handleChange} value={notetext}>
            </textarea>
            <div className="note-footer">

                <button className='save' onClick={handleSaveClick}>save</button>
            </div>
        </div>

    )



}

export default AddNote;