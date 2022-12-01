import { Typography } from '@material-tailwind/react';
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='About'>
      <Typography variant="h2" className="center">This is a Notes taking App</Typography>
      <Typography variant="h5">The Technologies that I used to build this App : </Typography>
      <small>HTML5,CSS3,JavaScript,React,Tailwind CSS,Material Tailwind,React-Router-DOM,React Context Hook</small>
      <br />
      <br />
      <Typography variant="h4">By the way I'm Nayan.</Typography>
      <Link to="/" className='linktag'>{<FaHome  size="50px" color='rgb(33 150 243)'/>}</Link>
    </div>
  )
}
