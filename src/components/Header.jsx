import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h1>
        <Link to="/"><h1>Quick Note</h1></Link>
      </h1>
    </div>
  )
}
