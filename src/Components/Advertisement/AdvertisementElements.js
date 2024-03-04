import { NavLink as AdvertLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderAdvert = styled(AdvertLink)`
  text-decoration: none;
`;

export const AdvertContainer = styled.div`
  width: 100%;
  max-width: 1460px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`;

export const AdvertPictureWrapper = styled.div`
  width: 100%;
  height: 60px;
  max-height: 100%;
  background-color: #da002b;
  position: relative;
`;

export const AdvertImg = styled.img`
  width: 100%;
`;

export const AdvertCloseBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 70px;
  background-color: #da002b;
  z-index: 999;
`;
