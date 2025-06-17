
import React from "react";
import ReactMarkdown from "react-markdown";

function NoteItem({ note, index, onEdit, onDelete, onTogglePin }) {
  return (
    <div className="border p-3 rounded bg-white shadow dark:bg-gray-800 dark:text-white bx-shadow">
      <div className="ls-catpin">
        <strong><span className="">
          {note.category || "General"}
        </span></strong>
        <button onClick={() => onTogglePin(index)} className="text-sm btn-wt">
          {note.pinned ? "📌 Unpin" : "📍 Pin"}
        </button>
      </div>
      <div>
      <ReactMarkdown>
        {note.text}
      </ReactMarkdown>
      </div>
      <p className="text-xs text-gray-500 mt-2 dark:text-gray-400">
        Saved on: {new Date(note.timestamp).toLocaleString()}
      </p>
      <div className="space-x-2 mt-2">
        <button
          className="px-2 py-1 bg-yellow-400 text-white rounded"
          onClick={() => onEdit(index)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;