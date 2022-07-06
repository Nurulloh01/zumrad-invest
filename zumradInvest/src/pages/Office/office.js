import React, { usePromotableZIndex, useState, } from "react";
import ReactStars from "react-rating-stars-component";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import {
  Container,
  Content,
  TextBox,
  TextTwo,
  Text,
  Card,
  CardBox,
  CardTextBox,
  CardText,
  CardImage,
  CardImageBox,
  CardRating,
  CardHeart,
  CardBottomBox,
  CardCart,
  CardP,
  CardButton,
  CardSpan,
  CardTitle,
  Carusel,
  LinkButton,
  SaveBox,
  TrendLogo
} from "./officeStyle";
import InfiniteCarousel from "react-leaf-carousel";
import "boxicons";
import Header from "../../components/Headers";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import img from "../../assets/images/bg-23.jpg";
import img1 from "../../assets/images/bg-20.jpg";
import img2 from "../../assets/images/bg-19.jpg";
import img3 from "../../assets/images/bg-18.jpg";
import img4 from "../../assets/images/bg-21.jpg";
import img5 from "../../assets/images/bg-13.jpg";
import ScrollTop from "../../components/ScrollTop/scrollTop";
import Contact from "../../components/Contact/contact";

function Office() {
  const [like, setLike] = useState(false);
  const [cart, setCart] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };  

  return (
    <Container>
      <Header />
      <Content
        style={{
          backgroundImage: `url(${img5})`,
          backgroundBlendMode: "darken",
        }}
      >
        <TextBox>
          <Slide bottom>
            <Text>Оффисни Кресло</Text>
          </Slide>
          <Slide top>
            <TextTwo>
              <Link to="/">
                <box-icon name="home" color="#fff"></box-icon>
              </Link>
              / Оффисни Кресло
            </TextTwo>
          </Slide>
        </TextBox>
      </Content>
      <Carusel>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
          <div>
            <img alt="" src={img} />
          </div>
        </InfiniteCarousel>
      </Carusel>
      <CardBox>
        <Card>
          <CardImageBox  style={{backgroundImage: `url(${img1})`, backgroundBlendMode: 'darken' }} >
            <TrendLogo>Zumrad Invest</TrendLogo>
            <Fade Right >
              <Link to="/ProductMore" style={{textDirection: 'none'}}>
            <LinkButton style={{transition: '.3s ease'}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: '24px', height: '24px',  marginBottom: '12px', marginRight: '10px', fill: 'rgba(255, 255, 255, 1)'  }}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
            </LinkButton>
            </Link>
            </Fade>
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            {/* <CardButton>Купить</CardButton> */}
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img2} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img3} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img4} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
      </CardBox>
      <CardBox>
        <Card>
          <CardImageBox>
            <CardImage src={img1} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img2} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img3} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img4} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
      </CardBox>
      <CardBox>
        <Card>
          <CardImageBox>
            <CardImage src={img1} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img2} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img3} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img4} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
      </CardBox>
      <CardBox>
        <Card>
          <CardImageBox>
            <CardImage src={img1} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img2} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img3} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
        <Card>
          <CardImageBox>
            <CardImage src={img4} />
          </CardImageBox>
          <CardTextBox>
            <CardTitle>
              <CardText>Оффисни Кресло</CardText>
              <CardSpan>200$</CardSpan>
            </CardTitle>
            <CardBottomBox>
              <CardRating>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffee00"
                />
              </CardRating>
              <SaveBox>
                <CardCart onClick={() => setCart((prevLike) => !prevLike)}>
                  {cart ? (
                    <box-icon
                      name="cart"
                      type="solid"
                      color="#444444"
                    ></box-icon>
                  ) : (
                    <box-icon name="cart" color="#444444"></box-icon>
                  )}
                </CardCart>
                <CardHeart onClick={() => setLike((prevLike) => !prevLike)}>
                  {like ? (
                    <box-icon
                      name="heart"
                      type="solid"
                      color="#ff0000"
                    ></box-icon>
                  ) : (
                    <box-icon name="heart" color="#ff0000"></box-icon>
                  )}
                </CardHeart>
              </SaveBox>
            </CardBottomBox>
            <CardP>
              Википе́дия — общедоступная многоязычная универсальная интернет
            </CardP>
            <CardButton>Купить</CardButton>
          </CardTextBox>
        </Card>
      </CardBox>
      <Contact />
      <ScrollTop />
      <Footer />
    </Container>
  );
}

export default Office;
