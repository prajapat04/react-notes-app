import React from "react";
import NoteItem from "./NoteItem";
import {motion, AnimatePresence} from "framer-motion";

function NoteList({ notes, onEdit, onDelete, onTogglePin }) {
  if(notes.length === 0) return <p className="text-gray-500">No notes yet.</p>
  return (
     <div className="space-y-4 wt-100">
      <AnimatePresence>
        {notes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <NoteItem
              note={note}
              index={index}
              onEdit={onEdit}
              onDelete={onDelete}
              onTogglePin={onTogglePin}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}


export default NoteList;
