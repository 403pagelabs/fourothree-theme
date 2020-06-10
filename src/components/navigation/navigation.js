import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = ({ state }) => (
  <NavWrapper>
    <MenuNav>
      <Menu>
        {state.theme.menu.map(([name, link]) => {
          // Check if the link matched the current page url
          const isCurrentPage = state.router.link === link;
          return (
            <MenuItem key={name}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <MenuLink
                link={link}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {name}
              </MenuLink>
            </MenuItem>
          );
        })}
      </Menu>
    </MenuNav>
  </NavWrapper>
);

export default connect(Navigation);

const NavWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

const Menu = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;

  @media (min-width: 1000px) {
    margin-top: -2.2rem;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;
    
  }
`;

const MenuItem = styled.li`
padding: 0;
  float: bottom;
  margin: 0px 18px;
  color: #353535;
  font-weight: 700;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const MenuLink = styled(Link)`
  display: block;
  line-height: 1.2;
  text-decoration: none;
  line-height: 2em;
  padding: 10px 5px 5px 5px;
  border-top: 10px solid transparent;

  &:hover,
  &[aria-current="page"] {
    line-height: 2em;
    padding: 10px 5px 5px 5px;
    border-top: 10px solid;
  }
`;
