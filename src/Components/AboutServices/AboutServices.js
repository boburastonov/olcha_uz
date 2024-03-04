import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderTop = styled.div`
  background-color: #da002b;
`;

export const HeaderTopContainer = styled.div`
  width: 100%;
  max-width: 1460px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`;

export const HeaderTopNavbar = styled.nav`
  padding: 0;
  margin: 0;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  font-size: 16px;
  font-weight: 500;
  padding: 2px 10px;
  line-height: 24px;
  border-radius: 10px;
  color: #fff;
  border-color: #fff;
  background-color: transparent;
  &:hover {
    color: #da002b;
    background-color: #fff;
  }
  &:nth-child(odd) {
    color: #da002b;
    background-color: #fff;
    &:hover {
      color: #fff;
      background-color: #da002b;
      border-color: #fff;
    }
  }
`;

export const NavbarItem = styled.li`
  &:first-child {
    display: flex;
    margin-right: 20px;
    ${NavbarLink} {
      margin-right: 15px;
    }
  }
  &:nth-child(2) {
    ${NavbarLink} {
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      background-color: transparent;
      border: none;
      &:hover {
        color: #ffffffb3;
      }
    }
  }
`;

export const HeaderTopActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ActionsPhone = styled.div`
  margin-right: 24px;
`;

export const PhoneNumber = styled(NavLink)`
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
`;

export const ActionBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 15px;
  border: 2px solid #fff;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  line-height: 1.5;
  white-space: nowrap;
  &:hover {
    color: #da002b;
    background-color: #fff;
  }
`;

export const HeaderLangList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px 28px;
  margin: 0 32px;
  height: 56px;
  border-left: 1px solid hsla(0, 0%, 100%, 0.3);
  border-right: 1px solid hsla(0, 0%, 100%, 0.3);
`;

export const HeaderLangLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  color: #ffffffb3;
  &:hover {
    color: #fff;
  }
`;

export const HeaderLangItem = styled.li`
  &:not(:last-child) {
    margin-right: 28px;
  }
  &:nth-child(2) {
    ${HeaderLangLink} {
      color: #fff;
    }
  }
`;
