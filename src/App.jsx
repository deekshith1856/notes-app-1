import { useEffect, useState } from "react"
import NoteList from "./components/NotesList/NotesList"
import { nanoid } from 'nanoid';
import Header from "./components/Header/Header";
import SearchTable from "./components/Search/search";
const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app-data')) || [])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes)
      setNotes(savedNotes);
  }, [])
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: text,
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);

    setNotes(newNotes);
  }
  return (

    <div className="container">
      <Header />
      <SearchTable handleSearchTerm={setSearchTerm} />
      <NoteList notes={notes.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>

  )
}
export default App