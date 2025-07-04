import styled from 'styled-components';
import { fadeInDown } from '../../styles/GlobalStyles';

export const StyledMessageBox = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeInDown} 0.5s ease-out forwards;

  background-color: ${props => props.type === 'success' ? '#dcfce7' : '#fee2e2'}; 
  border-color: ${props => props.type === 'success' ? '#86efac' : '#fca5a5'}; 
  color: ${props => props.type === 'success' ? '#16a34a' : '#dc2626'}; 
`;

export const MessageBoxText = styled.span`
  display: block;
  font-weight: 500;
`;

export const MessageBoxCloseButton = styled.button`
  margin-left: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1;
  color: #4b5563; 
  &:hover {
    color: #1f2937; 
  }
  &:focus {
    outline: none;
  }
`;