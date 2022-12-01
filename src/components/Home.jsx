


import {FaInfo} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import NotesList from './NotesList';
import NotesInput from './NotesInput';

export default function Home() {


  return (
    <div className='Home'>
     <NotesInput />
      <div>
      <NotesList />
      </div>
      <Link to="/about" className='linktag'>{<FaInfo  size="50px" color='rgb(33 150 243)'/>}</Link>
    </div>
  )
}
