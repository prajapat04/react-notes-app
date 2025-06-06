import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}){
  if (!notes.length) return <p>No Notes yet.</p>

  return (
    <div className="space-y-3 form-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))
      }
    </div>
  );
}
export default NoteList;
