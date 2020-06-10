import { styled } from "frontity";
import React from "react";
import SectionContainer from "../styles/section-container";

const Header = ({ label, children, labelColor }) => {
  return (
    <ArchiveHeader>
        <ArchiveTitle>
          <ColoredText color={labelColor}>{label}: </ColoredText>
          {children}
        </ArchiveTitle>
    </ArchiveHeader>
  );
};

export default Header;

const ArchiveHeader = styled.header`
  color: #000000;
  text-align: center;
  background-color: transparent;
  margin: auto 0;

  @media (min-width: 700px) {
    margin: auto 0;
  }
`;


const ArchiveTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: -0.026666667em;
  margin: 0;

  @media (min-width: 700px) {
    font-size: 5rem;
  }
`;

const ColoredText = styled.span`
  color: ${props => props.color};
  text-transform: capitalize;
`;
