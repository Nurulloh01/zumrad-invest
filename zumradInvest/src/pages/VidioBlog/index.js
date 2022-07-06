import React from "react";
import { Container, Banner, Box, TextBox, Text, TextBox1, Text1, } from "./style";
import Headers from "..//..//components//Headers";
import Footer from "../../components/Footer/footer"
import img from "..//..//assets//images//bg-13.jpg"
import { Link } from "react-router-dom";

function VidioBlog() {
  return (
      <Container >
        <Headers />
        <Banner style={{ backgroundImage: `url(${img})`,  backgroundBlendMode: "darken" }}>
          <Box>
            <TextBox>
              <Text>Видиоблог</Text>
            </TextBox>
            <TextBox1>
              <Link to='/'>
              <box-icon name="home" color="#fff"></box-icon>
              </Link>
              <Text1>/ Видиоблог</Text1>
            </TextBox1>
          </Box>
        </Banner>
        <Footer/>
      </Container>
  );
}

export default VidioBlog;
