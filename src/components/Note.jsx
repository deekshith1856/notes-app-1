import { MdDeleteForever } from 'react-icons/md'
const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <span> {text} </span>
            <div className="note-footer">
                <p>{date}</p>
                <MdDeleteForever className='delete-icon' onClick={() => handleDeleteNote(id)
                } />
            </div>
        </div>
    )
}
export default Note;