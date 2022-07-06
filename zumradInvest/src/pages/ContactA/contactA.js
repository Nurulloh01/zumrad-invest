import React from "react";
import Headers from "../../components/Headers";
import Footer from "../../components/Footer/footer"
import {
  Body,
  ContentContact,
} from "./contactAStyle";
import Contact from "../../components/Contact/contact";
// import img from "../../assets/images/bg-1.jpg";
// import location from "../../assets/images/location-plus-solid-84.png";
// import tel from "../../assets/images/phone-solid-84.png";
// import clock from "../../assets/images/time-five-solid-84.png";

function ContactA() {
  return (
    <Body>
      <Headers />
      <ContentContact>
      <Contact/>
      </ContentContact>
      <Footer/>
    </Body>
  );
}

export default ContactA;
