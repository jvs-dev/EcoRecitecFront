import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
    z-index: 2;
    width: 100%;
    backdrop-filter: blur(5px);    
    background: ${props => props.stayTop ? '#d6d5eda6' : '#fff'};
    padding: 0px 2rem;
    height: 70px;
    font-family: "Poppins", sans-serif;
    transition: 0.3s ease;
`;

export const NavContainer = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const BrandLink = styled(Link)`  
transition: color 0.3s ease; 
  &:hover {
    transform: scale(1.05);
  }  
  img {
    height: 2rem; 
    width: auto; 
    vertical-align: middle; 
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem; 
`;

export const NavLink = styled(Link)`
  color: #1e1e1e;
  font-size: 1.125rem; 
  font-weight: 500; 
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
  content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: var(--primary-color);
    bottom: -4px;
    left: 0;    
    transition: 0.3s ease;
  }
  &:hover {
    color: var(--primary-color);
  }  
  &:hover::after {
    width: 100%;    
  }
  transition: color 300ms ease-in-out; 
`;
