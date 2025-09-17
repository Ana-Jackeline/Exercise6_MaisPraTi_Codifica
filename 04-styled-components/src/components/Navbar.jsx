import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const Cart = styled.div`
  position: relative;
  font-size: 1.25rem;
`;

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: red;
  color: white;
  font-size: 0.75rem;
  border-radius: 999px;
  padding: 0 0.4rem;
`;

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <Nav>
      <Logo>Minha Loja</Logo>
      <Actions>
        <ThemeButton
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Alternar tema"
        >
          {darkMode ? "🌙" : "☀️"}
        </ThemeButton>
        <Cart aria-label="Carrinho de compras">
          🛒<Badge>3</Badge>
        </Cart>
      </Actions>
    </Nav>
  );
}
