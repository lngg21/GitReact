import { Link } from 'react-router-dom';

function Navbar() {
   return (
    <nav>
      <div className="navbar-links">
        <div className="nav-item">
          <Link to="/ODS">ODS</Link>
        </div>
        <div className="nav-item">
          <Link to="/Abtme">Sobre mim</Link>
        </div>
      </div>
    </nav>
   );
   }

export default Navbar;
