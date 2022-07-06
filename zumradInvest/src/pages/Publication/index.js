import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Banner,
  Text,
  TextBox,
  TextBox1,
  Text1,
  Box,
  Content,
  CardBox,
  Card,
  Image,
  Button,
  ContentBox,
  ContentTwo,
} from "./style";
import Fade from 'react-reveal/Fade'
import Footer from "../../components/Footer/footer";
import Headers from "..//..//components//Headers";
import img from "..//..//assets//images//bg-13.jpg";
import img1 from "..//..//assets//images//bg-14.jpg";
import img2 from "..//..//assets//images//bg-15.jpg";
import img3 from "..//..//assets//images//bg-16.jpg";
import img4 from "..//..//assets//images//bg-17.jpg";
import img5 from "..//..//assets//images//bg-18.jpg";
import img6 from "..//..//assets//images//bg-19.jpg";
import img7 from "..//..//assets//images//bg-20.jpg";
import img8 from "..//..//assets//images//bg-21.jpg";
import imag from "..//..//assets//images//scroll3.jpg";
import down from "../../assets/images/down1.jpg";
import "boxicons";
import ScrollTop from "../../components/ScrollTop/scrollTop";

function Publication() {
  return (
    <>
      <Container style={{ backgroundImage: `url(${img})`, backgroundBlendMode: "darken" }}>
        <Headers />
        <Banner>
          <Box>
            <Fade bottom>
            <TextBox>
              <Text>ПУБЛИКАЦИИ</Text>
            </TextBox>
            </Fade>
            <Fade top>
            <TextBox1>
              <Link to='/'>
              <box-icon name="home" color="#fff"></box-icon>
              </Link>
              <Text1>/ Публикации</Text1>
            </TextBox1>
            </Fade>
          </Box>
        </Banner>
      </Container>
      <ContentBox style={{ backgroundImage: `url(${down})` }}>
          <Fade left>
        <Content>
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img1})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
         
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img2})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img3})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img4})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
        </Content>
        </Fade>
        <Fade right>
        <ContentTwo>
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img5})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img6})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img7})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
          <CardBox>
            <Card>
              <Image style={{ backgroundImage: `url(${img8})` }}></Image>
            </Card>
            <Link to="/PublicationMore" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundImage: `url(${imag})` }}>
                Подробное..
              </Button>
            </Link>
          </CardBox>
        </ContentTwo>
        </Fade>
        <ScrollTop/>
        <Footer />
      </ContentBox>
    </>
  );
}

export default Publication;
