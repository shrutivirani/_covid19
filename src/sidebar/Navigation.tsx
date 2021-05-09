import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../pages/shared/models/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  text-decoration: none;
  color: #fff;
  &:hover {
    background-color: #3e242d;
    color: #ccc;
    border-left: 4px solid #ccc;
    text-decoration: none;
  }
`;
const SidebarLabel = styled.span`
  padding-left: 0.6rem;
  font-size: 1.2rem;
`;

const Navigation: FC<SidebarLinkProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default Navigation;
