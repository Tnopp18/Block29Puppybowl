import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to ="/players">All Puppies</Link>
      </li>
    </ul>
  );
};

export default NavBar