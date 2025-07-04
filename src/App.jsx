import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage";
import Navbar from "./components/NavBar";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background-color: #f9fafb;
`;

const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
  font-family: "Inter", sans-serif;
`;

const FooterText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
        <FooterContainer>
          <p>
            &copy; {new Date().getFullYear()} Eco Recitec. Todos os direitos
            reservados.
          </p>
          <FooterText>
            Desenvolvido para o desafio de processo seletivo.
          </FooterText>
        </FooterContainer>
      </AppContainer>
    </Router>
  );
}
export default App;
