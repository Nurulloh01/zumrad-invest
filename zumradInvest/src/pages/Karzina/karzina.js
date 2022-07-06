import React from "react";
import Headers from "../../components/Headers";
import Footer from "../../components/Footer/footer";
import {
  Body,
  Container,
  H,
  Span,
  Banner,
  Box,
  TitleBox,
  BannerBox,
} from "./karzinaStyle";
import img from "../../assets/images/bg-13.jpg";

function karzina() {
  return (
    <Body>
      <Headers />
      <Container style={{ backgroundImage: `url(${img})` }}>
        <TitleBox>
          <H>Корзина</H>
          <Span>Корзина</Span>
        </TitleBox>
      </Container>
      <BannerBox>
        <Banner>
          <Box></Box>
        </Banner>
      </BannerBox>
      <Footer />
    </Body>
  );
}

export default karzina;
