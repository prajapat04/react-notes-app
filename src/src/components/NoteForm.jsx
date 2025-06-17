import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function NoteForm({ note, setNote, category, setCategory, onSubmit, editMode }) {
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="mb-4 list-width">
      <div className="cat-note">
      <div>
        <label className="font-semibold">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
      <div className="">
        <span className="font-semibold">Note:</span>
        <button onClick={() => setPreviewMode(!previewMode)}>
          {previewMode ? "✏️ Edit" : "👁️ Preview"}
        </button>
      </div>
      </div>
      {previewMode ? (
        <div className="border rounded p-2 bg-gray-100 dark:bg-gray-800">
          <ReactMarkdown>{note}</ReactMarkdown>
        </div>
      ) : (
        <input
          className="border rounded input-text"
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></input>
      )}
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onSubmit}
      >
        {editMode ? "Update Note" : "Add Note"}
      </button>
    </div>
  );
}

export default NoteForm;
