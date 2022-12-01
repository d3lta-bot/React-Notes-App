import {Card,CardBody,Typography } from "@material-tailwind/react";
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import NotesContext from "../Context/NotesContext";


export default function NotesItem({note}) {
  const {deleteNote,editNote} = useContext(NotesContext)
  return (
    <Card className="w-96 m-auto my-5 ">
        <button className="delete" onClick={()=>deleteNote(note.id)}><FaTimes color='rgb(33 150 243)' size="20px"/></button>
        <button className="edit" onClick={()=>editNote(note)}><FaEdit color='rgb(33 150 243)' size="20px"/></button>
      <CardBody className="text-center">
      <Typography  variant="h4">{note.text}</Typography>
      </CardBody>
      </Card>
  )
}

