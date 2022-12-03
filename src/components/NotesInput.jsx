import { Input,Button } from "@material-tailwind/react";
import { useContext,useState,useEffect } from "react";
import NotesContext from "../Context/NotesContext";

export default function NotesInput() {
  const [text, setText] = useState("");
  const {addNotes,noteEdit,updateNote} = useContext(NotesContext)

  useEffect(()=>{
    if (noteEdit.edit === true){
      setText(noteEdit.note.text)
    }
  },[noteEdit])


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  if(text.trim().length > 5){
    let newNotes = {
      text,
    };
  
    if (noteEdit.edit === true){
      updateNote(noteEdit.note.id, newNotes)
    }else{
      addNotes(newNotes)
    }
    setText("");
  }
  };
  return (
    <div className="w-72 m-auto">
    <form onSubmit={handleSubmit}>
    <Input label="Write Your Note Here" value={text} onChange={handleChange}/>
    <Button variant="filled" type='submit' className='my-7 BTN'>filled</Button>
    </form>
    </div>
  )
}
