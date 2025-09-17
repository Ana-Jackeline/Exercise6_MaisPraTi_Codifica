import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tag = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  color: white;
  background: ${({ theme, type }) =>
    type === "Novo" ? theme.colors.tagNovo : theme.colors.tagPromo};
`;

const Info = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Rating = styled.p`
  color: #facc15;
`;

export default function ProductCard({ product }) {
  return (
    <Card tabIndex="0">
      <ImgWrapper>
        <Img src={product.image} alt={product.title} loading="lazy" />
        <Tag type={product.tag}>{product.tag}</Tag>
      </ImgWrapper>
      <Info>
        <Title>{product.title}</Title>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Rating aria-label={`Avaliação ${product.rating} de 5`}>
          {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
        </Rating>
        <Button variant="solid">Adicionar</Button>
      </Info>
    </Card>
  );
}
