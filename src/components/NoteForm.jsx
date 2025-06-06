import React, {useState} from "react";

function NoteForm({onAdd}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.trim()) return;
    onAdd(input);
    setInput("");
  };

return (
  <form onSubmit={handleSubmit} className="mb-4 form-width">
    <textarea 
    className="w-full p-2 border rounded input-text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="write your note here...."
    />
    <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add Note
      </button>
  </form>
);
}

export default NoteForm;