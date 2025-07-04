import styled from 'styled-components';
import { spin } from '../../styles/GlobalStyles';

export const TableContainer = styled.div`
  overflow-x: auto;
  background-color: #fff;
  border-radius: 0.75rem; 
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
  border: 1px solid #e5e7eb; 
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem; 
`;

export const StyledTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  & > thead {
    background-color: #dcfce7; 
  }
  & > thead > tr > th {
    padding: 0.75rem 1.5rem; 
    text-align: left;
    font-size: 0.75rem; 
    font-weight: 500; 
    color: #374151; 
    text-transform: uppercase;
    letter-spacing: 0.05em; 
  }
  & > thead > tr > th:first-child {
    border-top-left-radius: 0.75rem; 
  }
  & > thead > tr > th:last-child {
    border-top-right-radius: 0.75rem; 
  }
  & > tbody {
    background-color: #fff;
    & > tr {
      border-top: 1px solid #e5e7eb; 
      &:hover {
        background-color: #f9fafb; 
      }
    }
    & > tr > td {
      padding: 1rem 1.5rem; 
      white-space: nowrap;
      font-size: 0.875rem; 
      color: #374151; 
    }
    & > tr > td:first-child {
      font-weight: 500; 
      color: #1f2937; 
    }
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

export const Spinner = styled.div`
  animation: ${spin} 1s linear infinite;
  border-radius: 50%;
  height: 4rem; 
  width: 4rem; 
  border-top: 4px solid #22c55e; 
  border-bottom: 4px solid #22c55e; 
`;

export const LoadingText = styled.p`
  margin-left: 1rem; 
  font-size: 1.25rem; 
  color: #374151; 
`;

export const ErrorContainer = styled(LoadingContainer)`
  color: #dc2626; 
  font-size: 1.25rem; 
`;

export const NoDataText = styled.p`
  text-align: center;
  color: #4b5563; 
  font-size: 1.125rem; 
`;
