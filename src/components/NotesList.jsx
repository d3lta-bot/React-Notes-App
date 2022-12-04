import NotesItem from "./NotesItem"
import { useContext } from "react";
import NotesContext from "../Context/NotesContext";
import { Card,Typography,CardBody } from "@material-tailwind/react";

export default function NotesList() {
  const {notes} = useContext(NotesContext)
  return (
    notes.length <1 ? <Card className="w-64 m-auto my-5 ">
      <CardBody className="text-center">
      <Typography variant="h5">No Notes Added Yet</Typography>
      </CardBody>
    </Card> : <div>
    {notes.map((note)=>{
    return(
      <NotesItem note={note} key={note.id}/>
    )})}
  </div>
  )
}

