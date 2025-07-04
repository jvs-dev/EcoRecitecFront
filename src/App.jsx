import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/data" element={<DataPage />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center p-6 mt-auto font-inter">
          <p>
            &copy; {new Date().getFullYear()} Eco Recitec. Todos os direitos
            reservados.
          </p>
          <p className="text-sm mt-2">
            Desenvolvido para o desafio de processo seletivo.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
