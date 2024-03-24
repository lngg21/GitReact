import { Link } from 'react-router-dom';

function Navbar() {
   return (
<nav>
      <ul>
        <li>
          <Link to="/Abtme">Sobre mim</Link>
        </li>
      </ul>
    </nav>   
   );
   }

export default Navbar;
