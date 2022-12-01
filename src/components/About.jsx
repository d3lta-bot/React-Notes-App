import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='About'>
      <h2 className="center">This is a Notes taking App</h2>
      <p>The Technologies that I used to build this App is : </p>
      <small>HTML5,CSS3,JavaScript,React,Tailwind CSS,Material Tailwind,React-Router-DOM,React Context Hook</small>
      <Link to="/" className='linktag'>{<FaHome  size="50px" color='rgb(33 150 243)'/>}</Link>
    </div>
  )
}
