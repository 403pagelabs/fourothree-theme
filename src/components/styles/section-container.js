import { styled } from "frontity";

// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem"
};

const getMaxWidth = props => maxWidths[props.size] || maxWidths["medium"];

const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
  max-width: ${getMaxWidth};
  padding: 12px 6px;
  border-radius: 5px;
  background: -webkit-linear-gradient(to right, #ee076e, #f81f01); 
  background: linear-gradient(to right, #ee076e, #f81f01); 
  

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
    padding: 12px 6px;
    border-radius: 5px;
    background: -webkit-linear-gradient(to right, #ee076e, #f81f01); 
    background: linear-gradient(to right, #ee076e, #f81f01); 
  }
`;

export default SectionContainer;
