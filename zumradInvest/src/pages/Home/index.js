import React from "react";
import Fade from 'react-reveal/Fade'
import {
    Body,
    ContentBox,
    Image,
    Content,
    Card,
    CardImage,
    Title,
    SectionTitle,
    Btn,
} from "./style";
import Headers from "../../components/Headers";
import Footer from "../../components/Footer/footer";
import CarouselContainer from "../../components/Carousel/CarouselContainer";

import img from "..//..//assets//images//bg-5.jpg";
import img1 from "..//..//assets//images//bg-6.jpg";
import img2 from "..//..//assets//images//bg-7.jpg";
import img3 from "..//..//assets//images//bg-8.jpg";
import img4 from "..//..//assets//images//bg-9.jpg";
import img5 from "..//..//assets//images//bg-10.jpg";
import Contact from "../../components/Contact/contact";
import ScrollTop from "../../components/ScrollTop/scrollTop";

function index() {

    return (<Body >
        <Headers />
        <CarouselContainer />
        <ContentBox >
            <Fade left >
                <Title >
                    <SectionTitle > Наши кресло </SectionTitle>
                </Title></Fade>
            <Fade right >
                <Content >
                    <Card >
                        <CardImage >
                            <Image src={img} />
                        </CardImage>
                    </Card>
                    <Card >
                        <CardImage >
                            <Image src={img1}
                            /> </CardImage> </Card> <Card >
                        <CardImage >
                            <Image src={img2} />

                        </CardImage>
                    </Card>
                    <Card >
                        <CardImage >
                            <Image src={img3} /> </CardImage>
                    </Card> <Card >
                        <CardImage >
                            <Image src={img4} /> </CardImage>
                    </Card> <Card >
                        <CardImage >
                            <Image src={img5}
                            /> </CardImage> </Card> </Content> </Fade> <Title >
                <Btn> See all </Btn> </Title>
        </ContentBox>
        <Contact />
        <ScrollTop />
        <Footer />
    </Body>
    );
}
export default index;