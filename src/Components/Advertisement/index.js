import React from "react";
import HeaderAdvertImg from "../Assets/header-advert.png";
import { IoClose } from "react-icons/io5";
import {
  HeaderAdvert,
  AdvertContainer,
  AdvertPictureWrapper,
  AdvertImg,
  AdvertCloseBtn,
} from "./AdvertisementElements";

function Advertisement() {
  return (
    <>
      <HeaderAdvert to="https://olcha.uz/oz/category/s-ruki-olcha">
        <AdvertContainer>
          <AdvertPictureWrapper>
            <AdvertImg src={HeaderAdvertImg} />
          </AdvertPictureWrapper>
          <AdvertCloseBtn>
            <IoClose style={{ color: "#fff", width: "20px", height: "20px" }} />
          </AdvertCloseBtn>
        </AdvertContainer>
      </HeaderAdvert>
    </>
  );
}

export default Advertisement;
