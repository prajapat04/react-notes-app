import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onEdit, onDelete }) {
  if(notes.length === 0) return <p className="text-gray-500">No notes yet.</p>
  return (
    <div className="space-y-4 mt-4 list-width">
      {notes.map((note, index) => (
        <NoteItem
          key={note.id}
          index={index}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;
