import React from "react";

function NoteForm({ note, setNote, onSubmit, editMode }) {
  return (
    <form onSubmit={onSubmit} className="mb-4 form-width">
      <input
        className="w-full p-2 border rounded input-text"
        placeholder="Write your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {editMode ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;
