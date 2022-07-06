import React from "react";
import Headers from "../../components/Headers";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  Body,
  Banner,
  Text,
  TextBox,
  TextBox1,
  Text1,
  Box,
  Content,
  ContentBox,
  LeftBox,
  RightBox,
} from "./productMoreStyle";
import img from "..//..//assets//images//bg-13.jpg";

function ProductMore() {
  return (
    <Body
      style={{ backgroundImage: `url(${img})`, backgroundBlendMode: "darken" }}
    >
      <Headers />
      <Banner>
        <Box>
          <Fade bottom>
            <TextBox>
              <Text>Оффисни Кресло</Text>
            </TextBox>
          </Fade>
          <Fade top>
            <TextBox1>
              <Link to="/">
                <box-icon name="home" color="#fff"></box-icon>
              </Link>
              <Text1>/ Оффисни Кресло</Text1>
            </TextBox1>
          </Fade>
        </Box>
      </Banner>
      <ContentBox>
        <Content>
          <LeftBox></LeftBox>
          <RightBox></RightBox>
        </Content>
      </ContentBox>
    </Body>
  );
}

export default ProductMore;
