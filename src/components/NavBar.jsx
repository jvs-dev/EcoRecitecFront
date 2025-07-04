import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavContainer,
  BrandLink,
  NavLinks,
  NavLink,
} from "./styles/NavbarStyles";

const Navbar = () => {
  const [stayTop, setStayTop] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setStayTop(true);
    } else {
      setStayTop(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav stayTop={stayTop}>
      <NavContainer>
        <BrandLink to="/">
          <img src="/logo-recitec-02-02.png" alt="Eco Recitec Logo" />
        </BrandLink>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/data">Dados</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
export default Navbar;
