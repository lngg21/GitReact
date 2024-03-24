import { Link } from 'react-router-dom';

function Navbar() {
   return (
<nav>
      <ul>
        <li>
          <Link to="/ODS">ODS</Link>
        </li>
      </ul>
    </nav>   
   );
   }

export default Navbar;
