import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import iconInsta from './images/instagram.svg';
import iconTwitter from './images/twitter.svg';
import iconGmail from './images/gmail.svg';

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = event => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>To the top</span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
 
      <SitefooterLeft>
        <SitefooterLeftinside>      
      <SiteFooterInner>
        <Credits>
 
          <IconSocial>
            <Ercons><a href ="https://www.instagram.com/403pagedotcom/"><img src={iconInsta} width="65px" height="" alt="403Page Instagram"/></a></Ercons>
            <Ercons><a href ="mailto:labs@403page.com"><img src={iconGmail} width="117px" height="" alt="403Page Email"/></a></Ercons>
            <Ercons><a href ="https://twitter.com/403pagedotcom"><img src={iconTwitter} width="65px" height="" alt="403Page Twitter"/></a></Ercons>
            
          </IconSocial>
          <FooterEmail>
            <p>labs@403page.com</p>
          </FooterEmail>

          <Copyright>
            <Link link={state.frontity.url}>

            </Link>       
          </Copyright>

        </Credits>     
      </SiteFooterInner>
      </SitefooterLeftinside></SitefooterLeft>
    </SiteFooter>
  );
};

export default connect(Footer);

const FooterLogo = styled.div`
  padding:  25px;
  margin-left: auto;
  margin-right: auto;
`;

const FooterEmail = styled.div`
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  opacity: .8;

`;

const IconSocial = styled.div`
  display: inline-flex;
  padding-top:  35px;
`;

const Ercons = styled.p`
  padding: 0px 10px;
  display: inline-flex;
  opacity: .8;
  &:hover{
    opacity: 1;
  }

`;

const SitefooterLeft = styled.div`
  background-color: #202020;
  padding: 110px 0px;
  position: relative;
  z-index: 2;

  `;

const SitefooterLeftinside = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  content: "";
  z-index: 3;
  `;

const SiteFooterInner = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

const SiteFooter = styled.footer`
  margin-top: 5rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  color: #fff;

  @media (min-width: 700px) {
    margin-top: 8rem;
    font-size: 1.8rem;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Credits = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;

`;

const Copyright = styled.p`
  font-weight: 600;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
`;

const PoweredBy = styled.p`
  color: #ffffff;
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`;
