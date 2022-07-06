import React from 'react';
import Fade from 'react-reveal/Fade'
import {
  Body,
  ContactBox,
  Container,
  Box,
  Image,
  H,
  Span,
} from "./contactStyle";
import img from "../../assets/images/bg-1.jpg";
import location from "../../assets/images/location-plus-solid-84.png";
import tel from "../../assets/images/phone-solid-84.png";
import clock from "../../assets/images/time-five-solid-84.png";


function Contact() {
  return(
    <Body>
      <Fade left>
    <ContactBox style={{ backgroundImage: `url(${img})`, backgroundBlendMode: "darken" }}>
    <Container>
      <Box>
        <Image src={location} />
        <H>Адрес Зумрат инвест</H>
        <Span>
          г. Ташкент, Яшнабадский район, ул. 1я. Мавлона Риёзий, д. 31.
        </Span>
        <Span>Ориентиры: Wunderkind</Span>
      </Box>
      <Box>
        <Image src={tel} />
        <H>Телефон</H>
        <Span>перед выездом за час позвоните</Span>
        <Span>+998 (97) 402-55-48 Сергей</Span>
        <Span>+998 (97) 402-55-48 Сергей</Span>
      </Box>
      <Box>
        <Image src={clock} />
        <H>Рабочие дни</H>
        <Span>Пн. - Сб. .</Span>
        <Span>с 09:00 - 18:00 обед с 13:00 - 14:00</Span>
        <Span>Вс. - ВЫХОДНОЙ</Span>
      </Box>
    </Container>
  </ContactBox>
      </Fade>
  </Body>
  );
}

export default Contact;
