import React from "react";

function NoteItem({ note, index, onEdit, onDelete, onPinToggle }) {
  return (
    <div className="border p-3 rounded bg-white shadow form-width">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-700">{note.category}</h3>
        <button
          onClick={() => onPinToggle(index)}
          className="text-sm text-yellow-500 underline"
        >
          {note.pinned ? "Unpin" : "Pin"}
        </button>
      </div>
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