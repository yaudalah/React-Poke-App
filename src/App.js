import { Route, Routes } from 'react-router-dom';
import './App.css';
import Catalogue from './pages/catalogue/Catalogue.jsx';
import Description from './pages/description/Description';
import Home from './pages/Home';
import { Container } from "@mui/material";
import Header from "./component/header";

const sections = [
  {
    title: "PokeDex",
    url: "/",
  },
  {
    title: "Catalogue",
    url: "/catalouge",
  },
]


function App() {
  return (
    <>
    <Header title="React-Poke-App" sections={sections} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalouge" element={<Catalogue />} />
          <Route path="description/:id" element={<Description />} />
        </Routes>
    </Container>
  </>
  );
}

export default App;
