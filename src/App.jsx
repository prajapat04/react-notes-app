import { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';


import './App.css'


function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");


  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      console.log("Loaded notes:", saved);
      setNotes(JSON.parse(saved));
    }
  }, []);

  // Save only when notes are non-empty
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
      console.log("Saved notes:", notes);
    }
  }, [notes]);




  const handleAddOrUpdateNote = (e) => {
    e.preventDefault();
    if (!note.trim()) return alert("Enter a note first!");

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex].text = note;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      const newNote = {
        id: Date.now(), // Generate unique ID
        text: note,
        timestamp: new Date().toISOString()
      };
      setNotes([...notes, newNote]);
    }
    setNote("");
  };


  const handleEditNote = (index) => {
    setNote(notes[index].text);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      const updated = notes.filter((_, i) => i !== index);
      setNotes(updated);
    }
  };

  const filteredNotes = notes.filter((n) => n.text.toLowerCase().includes(searchQuery.toLowerCase()));


  return (
    <div className={"p-4 max-w-xl mx-auto form-style  " + (darkMode ? "ddark" : "")}>
      <button onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-800 text-white px-3 py-1 rounded dark-mode-btn "
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      <h1 className="text-3xl font-bold md-4 text-gradiant"> Notes App</h1>
    <input
        type="text"
        placeholder="Search notes..."
        className="mb-4 p-2 border w-full rounded input-text-sr"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <NoteForm
        note={note}
        setNote={setNote}
        onSubmit={handleAddOrUpdateNote}
        editMode={editIndex !== null}
      />

      <NoteList 
      notes={filteredNotes} 
      onEdit={handleEditNote} 
      onDelete={handleDeleteNote}
      ></NoteList>

    </div>
 
  );
}

export default App
