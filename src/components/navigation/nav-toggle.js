import { styled, css } from "frontity";
import React from "react";

// Base styling for all toggle buttons
export const BaseToggle = styled.button`
  appearance: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  position: relative;
  text-align: inherit;
  user-select: none;
  background: none;
  border: none;
  box-shadow: none;
  border-radius: 0;
  font-size: inherit;
  font-weight: 400;
  letter-spacing: inherit;
  padding: 0;
  text-transform: none;
  align-items: center;
  display: flex;
  overflow: visible;
  padding: 0 2rem;
  color: #000000;
  max-height: 100px;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1220px) {
    padding: 0 4rem;
  }

  @media (min-width: 1000px) {
    height: 4.4rem;
    padding: 0 3rem;
    position: relative;
    bottom: auto;
    left: auto;
    right: auto;
    top: auto;
    width: auto;
    ${props =>
      props.isMobile &&
      css`
        display: none !important;
      `}
  }
`;

// Used for the menu toggle button on Mobile
export const NavToggle = styled(BaseToggle)`
  position: absolute;
  bottom: 0;
  right: 4rem;
  top: 0;
  width: 6.6rem;
  display: none;

  @media (min-width: 1000px) {
    right: 2rem;
  }
`;

export const CloseNavToggle = styled(BaseToggle)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: #000000;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 3.1rem 0;

  @media (max-width: 700px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  svg {
    height: 1.6rem;
    width: 1.6rem;
    fill: currentColor;
  }

  > span {
    margin-right: 1.6rem;
  }
`;

// Used for the search toggle button on Mobile
export const SearchToggle = styled(BaseToggle)`
height: auto;
padding: 0 20px;
position: absolute;
margin: 0 40px;
display: block;
top: 3rem;


  @media (min-width: 1000px) {
    left: 2rem;
  }
  @media (max-width: 359px) {
    display: none;
  }
`;

// Generic, reusable component for displaying icon and label
export const LabeledIcon = ({ icon: Icon, label }) => (
  <ToggleInner>
    <Icon />
    <ToggleText></ToggleText>
  </ToggleInner>
);

export const ToggleInner = styled.span`
  display: flex;
  justify-content: center;
  height: 2.3rem;
  position: relative;
  bottom: 0.5rem;

  @media (min-width: 1000px) {
    position: static;
  }

  svg {
    height: 2.5rem;
    max-width: 2.3rem;
    width: 2.3rem;
    display: block;
    position: relative;
    z-index: 1;
  }
`;

export const ToggleText = styled.span`
  color: #6d6d6d;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  top: calc(100% + 0.5rem);
  width: auto;
  white-space: nowrap;
  word-break: break-all;

  @media (min-width: 700px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1000px) {
    left: 0;
    right: 0;
    text-align: center;
    top: calc(100% - 0.3rem);
    width: auto;
  }
`;

// This wraps each toggle button
export const ToggleWrapper = styled.div`
  @media (min-width: 1000px) {
    position: relative;
  }

  &:only-child::before {
    background-color: #dcd7ca;

    @media (min-width: 1000px) {
      background: #dedfdf;
      display: block;
      height: 2.7rem;
      position: absolute;
      left: 0;
      top: calc(50% - 1.35rem);
      width: 0.1rem;
    }

  }
`;
