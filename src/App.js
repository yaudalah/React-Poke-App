import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './pages/catalogue/Catalogue.jsx';
import Description from './pages/description/Description';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <div className='App-link'>
          <Link to={"/"}>PokeDex</Link>
          <Link to={"/catalouge"}>Catalogue</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalouge" element={<Catalogue />} />
        <Route path="description/:id" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
