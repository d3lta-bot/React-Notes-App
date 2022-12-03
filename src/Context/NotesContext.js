import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NotesContext = createContext();
export const NotesProvider = ({ children }) => {
  //get data from local storage
  const getDataLS = () => {
    const data = localStorage.getItem("notes");
    if (data) {
      return JSON.parse(data);
    }
  };

  const [notes, setNotes] = useState(getDataLS());
  //local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [noteEdit, setNoteEdit] = useState({
    note: {},
    edit: false,
  });

  const addNotes = (newNotes) => {
    newNotes.id = uuidv4();
    setNotes([newNotes, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const editNote = (note) => {
    setNoteEdit({
      note,
      edit: true,
    });
  };
  const updateNote = (id, updNote) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updNote } : note))
    );
  };
  return (
    <NotesContext.Provider
      value={{
        notes,
        addNotes,
        deleteNote,
        editNote,
        noteEdit,
        updateNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
