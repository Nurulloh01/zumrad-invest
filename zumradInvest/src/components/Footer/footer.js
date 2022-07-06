import React from "react";
import { Container, Box, Title, Social, SocialIcon } from "./footerStyle";
import "boxicons";

function Footer() {
  return (
    <Container>
      <Box>
        <Title>@Зумрад инвест | Все права защищены</Title>
        <Social>
          <SocialIcon>
            <box-icon type="logo" name="instagram" color="#fff"></box-icon>
          </SocialIcon>
          <SocialIcon>
            <box-icon type="logo" name="telegram" color="#fff"></box-icon>
          </SocialIcon>
          <SocialIcon>
            <box-icon type="logo" name="twitter" color="#fff"></box-icon>
          </SocialIcon>
          <SocialIcon>
            <box-icon name="facebook" type="logo" color="#fff"></box-icon>
          </SocialIcon>
        </Social>
      </Box>
    </Container>
  );
}

export default Footer;
