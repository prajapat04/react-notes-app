import React from "react";

function NoteForm({ note, setNote, category, setCategory, onSubmit, editMode }) {
  return (
    <form onSubmit={onSubmit} className="mb-4 form-width">
      <input
        className="w-full p-2 border rounded input-text"
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-2 p-2 border rounded">
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 btn"
      >
        {editMode ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;
