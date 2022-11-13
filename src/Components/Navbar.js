import { Link, animateScroll as scroll } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">MT</h1>
      <div className="nav-links">
        <Link
          to="about"
          className="nav-link"
          smooth={true}
          offset={-25}
          duration={200}
        >
          About
        </Link>
        <Link
          to="projects"
          className="nav-link"
          smooth={true}
          offset={-15}
          duration={400}
        >
          Projects
        </Link>
        <Link
          to="contact"
          className="nav-link"
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
