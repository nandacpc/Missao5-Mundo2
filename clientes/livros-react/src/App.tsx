import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/raiz" className="nav-link">Catálogo</Link>
            <Link to="/dados" className="nav-link">Novo</Link>
          </div>
        </nav>
      </header>
      <main className="container">
          <Routes>
            <Route path="" element={""} />
            <Route path="raiz" element={<LivroLista />} />
            <Route path="dados" element={<LivroDados />} />
          </Routes>
      </main>
    </>  
  );
}
export default App;
