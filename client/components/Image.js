import React from "react";
import styled from "@emotion/styled";

const StyledImage = styled.img`
  max-width: 100%;
  margin: 0 0 0 auto;
`;

export default function Image({ src, className }) {
  return <StyledImage src={src} className={className} />;
}
