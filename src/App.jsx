import {Route} from 'react-router-dom';
import ODS from './ODS/ODS';
import { BrowserRouter as Router, Routes } from 'react-router-dom'; 
import Abtme from "./Abtme/Abtme";
import Home from "./Home/Home";


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Abtme" element={<Abtme />} />
      <Route path="/ODS" element={<ODS />} />
    </Routes>
  </Router>
  );
}
export default App
