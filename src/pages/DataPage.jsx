import React, { useEffect, useState } from "react";
import {
  TableContainer,
  StyledTable,
  LoadingContainer,
  Spinner,
  LoadingText,
  ErrorContainer,
  NoDataText,
} from "./styles/DataPageStyles";
import { MainContent, Title } from "./styles/HomePageStyles";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const DataPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/submissions`);
        if (!response.ok) {
          throw new Error("Não foi possível carregar os dados.");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError(
          "Não foi possível carregar os dados. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
        <LoadingText>Carregando dados...</LoadingText>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <p>{error}</p>
      </ErrorContainer>
    );
  }

  return (
    <MainContent>
      <Title marginTop={'2rem'}>Dados Cadastrados</Title>

      {data.length === 0 ? (
        <NoDataText>Nenhum dado cadastrado ainda.</NoDataText>
      ) : (
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Mensagem</th>
                <th>Data de Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>{new Date(item.created_at).toLocaleString("pt-BR")}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      )}
    </MainContent>
  );
};

export default DataPage;
