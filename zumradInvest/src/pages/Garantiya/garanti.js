import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Banner,
  Box,
  TextBox,
  Text,
  TextBox1,
  Text1,
  ContentBox,
  Content,
  ContentText,
  ContentIconBox,
  ContentParagraf
} from "./garantiStyle";
import Headers from "..//..//components//Headers";
import "boxicons"
import img from "..//..//assets//images//bg-13.jpg";
import Footer from "../../components/Footer/footer";
import Contact from "../../components/Contact/contact";
import ScrollTop from "../../components/ScrollTop/scrollTop";

function Garantiya() {
  return (
    <Container >
      <Headers />
      <Banner style={{ backgroundImage: `url(${img})`,  backgroundBlendMode: "darken"}}>
        <Box>
          <TextBox>
            <Text>Гарантия</Text>
          </TextBox>
          <TextBox1>
            <Link to='/'>
            <box-icon name="home" color="#fff"></box-icon>
            </Link>
            <Text1>/ Гарантия</Text1>
          </TextBox1>
        </Box>
      </Banner>
      <ContentBox>
          <Content>
              <ContentText>
              Гарантия на покупку мебели
              </ContentText>
              <ContentParagraf>
                Поделиться:
              </ContentParagraf>
              <ContentIconBox>
                <box-icon name='facebook-circle' type='logo' color='#07a7f7' size='40px' ></box-icon>
                <box-icon name='instagram-alt' type='logo' color='#f57777' size='40px' ></box-icon>
                <box-icon type='logo' name='telegram' color='#4793f7' size='40px'></box-icon>
                <box-icon name='whatsapp' type='logo' color='#a83692' size='40px' ></box-icon>
                <box-icon name='vk' type='logo' color='#3a3d45'  size='40px' ></box-icon>
                <box-icon name='phone-call' type='solid' color='#a83692' size='40px' ></box-icon>
                <box-icon name='ok-ru' type='logo' color='#fbdb06' size='40px' ></box-icon>
              </ContentIconBox>
          </Content>
      </ContentBox>
      <Contact/>
      <ScrollTop/>
      <Footer/>
    </Container>
  );
}

export default Garantiya;
