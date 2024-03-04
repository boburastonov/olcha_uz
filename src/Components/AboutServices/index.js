import React from "react";
import {
  HeaderTop,
  HeaderTopContainer,
  HeaderTopNavbar,
  NavbarList,
  NavbarItem,
  NavbarLink,
  HeaderTopActions,
  ActionsPhone,
  PhoneNumber,
  ActionBtn,
  HeaderLangList,
  HeaderLangItem,
  HeaderLangLink,
} from "./AboutServices";

function AboutServices() {
  return (
    <>
      <HeaderTop>
        <HeaderTopContainer>
          <HeaderTopNavbar>
            <NavbarList>
              <NavbarItem>
                <NavbarLink>0% Muddatli to'lov</NavbarLink>
                <NavbarLink>Chegirmalar</NavbarLink>
                <NavbarLink>Yutuqli o'yinlar</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>Sayt xaritasi</NavbarLink>
              </NavbarItem>
            </NavbarList>
          </HeaderTopNavbar>
          <HeaderTopActions>
            <ActionsPhone>
              <PhoneNumber to="tel:+998712022021">
                +998 (71) 202 2021
              </PhoneNumber>
            </ActionsPhone>
            <ActionBtn to="https://olcha.uz/oz/sell-on-olcha">
              olchada soting
            </ActionBtn>
          </HeaderTopActions>
          <HeaderLangList>
            <HeaderLangItem>
              <HeaderLangLink>Ўзб</HeaderLangLink>
            </HeaderLangItem>
            <HeaderLangItem>
              <HeaderLangLink>O'z</HeaderLangLink>
            </HeaderLangItem>
            <HeaderLangItem>
              <HeaderLangLink>Рус</HeaderLangLink>
            </HeaderLangItem>
          </HeaderLangList>
        </HeaderTopContainer>
      </HeaderTop>
    </>
  );
}

export default AboutServices;
