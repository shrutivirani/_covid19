import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import Navigation from "./Navigation";
import flag from "../pages/shared/images/germany-flag.png";

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  height: 5rem;
  position: relative;
  background-color: #101010;
`;
const SidebarNav = styled.div`
  height: 100vh;
  width: 100px;
  background-color: #101010;
  position: fixed;
  top: 0;
  transition: 500ms;
`;
const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  height: 5rem;
  color: #120;
  @media (min-width: 768px) {
    color: #fff;
  }
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
const SidebarWrap = styled.div``;
const NavLabel = styled.div`
  display: flex;
  margin-left: 100px;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  @media (min-width: 768px) {
    color: #fff;
    font-size: 2rem;
  }
`;

const Sidebar: FC = () => {
  return (
    <IconContext.Provider value={{ color: "#aaa" }}>
      <Nav>
        <NavIcon to="/germany">
          <NavLabel>COVID-19 Data Germany</NavLabel>
        </NavIcon>
      </Nav>
      <SidebarNav>
        <SidebarWrap>
          <img
            src={flag}
            height="50px"
            width="70px"
            style={{ margin: "10px" }}
            alt="Germany Flag"
          />
          {SidebarData.map((item, index) => {
            return <Navigation item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};

export default Sidebar;
