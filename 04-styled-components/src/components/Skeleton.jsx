import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  animation: pulse 1.5s infinite;
`;

const Placeholder = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.border} 25%,
    ${({ theme }) => theme.colors.card} 50%,
    ${({ theme }) => theme.colors.border} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 0.25rem;
`;

const ImgPlaceholder = styled(Placeholder)`
  width: 100%;
  aspect-ratio: 1/1;
`;

const Line = styled(Placeholder)`
  height: ${({ size }) => (size === "short" ? "0.75rem" : "1rem")};
  width: ${({ width }) => width || "100%"};
`;

const BtnPlaceholder = styled(Placeholder)`
  height: 2rem;
  width: 6rem;
  border-radius: 0.375rem;
`;

export default function Skeleton() {
  return (
    <Card aria-hidden="true">
      <ImgPlaceholder />
      <Line size="short" width="80%" />
      <Line size="short" width="60%" />
      <BtnPlaceholder />
    </Card>
  );
}
