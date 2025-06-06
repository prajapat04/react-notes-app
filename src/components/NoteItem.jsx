import React from "react";

function NoteItem({note}){
  return (
    <div className="p-3 border rounded shadow list-border"><p className="list-name">
      {note.text}</p>
      <p className="text-sm text-gray-500">Saved on: {note.timestamp}</p>
      <button  className="btn">Completed</button></div>
  );
}

export default NoteItem;