import React from "react";

function NoteItem({ note, index, onEdit, onDelete }) {
  return (
    <div className="border p-3 rounded bg-white shadow form-width">
      <p className="text-gray-800 whitespace-pre-wrap list-name">{note.text}</p>
      <p className="text-xs text-gray-500 mb-2">
        Saved on: {new Date(note.timestamp).toLocaleString()}
      </p>
      <div className="space-x-2">
        <button
          className="px-2 py-1 bg-yellow-400 text-white rounded btn"
          onClick={() => onEdit(index)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded btn"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;