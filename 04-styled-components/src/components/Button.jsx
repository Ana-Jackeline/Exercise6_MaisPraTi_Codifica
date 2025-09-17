import React from "react";
import styled, { css } from "styled-components";

const BaseButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant, theme }) =>
    variant === "solid" &&
    css`
      background: ${theme.colors.primary};
      color: white;
      border: none;
      &:hover {
        background: ${theme.colors.primaryHover};
      }
    `}

  ${({ variant, theme }) =>
    variant === "outline" &&
    css`
      background: transparent;
      border: 2px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.primary}20;
      }
    `}

  ${({ variant, theme }) =>
    variant === "ghost" &&
    css`
      background: transparent;
      border: none;
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.primary}20;
      }
    `}
`;

export default function Button({ variant = "solid", children, disabled }) {
  return (
    <BaseButton variant={variant} disabled={disabled}>
      {children}
    </BaseButton>
  );
}
