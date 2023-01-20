import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-3 sticky top-0">
      <Link to="/" className="text-white font-bold text-2xl">
        <h1>React MERN MySql</h1>
      </Link>
      <ul className="flex justify-between">
        <li className="hover:bg-zinc-600 rounded-md">
          <Link to="/" className="text-white px-4  align-middle">Home</Link>
        </li>
        <li className="hover:bg-zinc-600 rounded-md">
          <Link to="new" className="text-white px-4 align-middle">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
