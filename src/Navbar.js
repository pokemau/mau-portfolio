import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Maurice R. Taneca</Link>
      <div className="nav-links">
        <NavLink to="/" end className="nav-link" >Home</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;