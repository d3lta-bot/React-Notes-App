import NotesItem from "./NotesItem"
import { useContext } from "react";
import NotesContext from "../Context/NotesContext";

export default function NotesList() {
  const {notes} = useContext(NotesContext)
  return (
    <div>
      {notes.map((note)=>{
      return(
        <NotesItem note={note} key={note.id}/>
      )})}
    </div>
  )
}
