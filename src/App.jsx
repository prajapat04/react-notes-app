import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

import './App.css'


function App() {
 const [notes, setNotes] =  useState([]);

 const addNote = (text) => {
  const newNote = {
    id: Date.now(), 
    text,
    timestamp: new Date().toLocaleString()
  };
  setNotes([newNote, ...notes]);
 };

 return (
  <div className="p-4 max-w-xl mx-auto form-style">
    <h1 className="text-3xl font-bold md-4 text-gradiant"> Notes 
      App</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes}></NoteList>
  </div>
 );
}

export default App
