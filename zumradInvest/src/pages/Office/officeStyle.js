import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #1d1611;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 50vh;
  justify-content: flex-start;
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.5);
`;
export const Carusel = styled.div`
  width: 90%;
  margin: 40px auto;
`;

export const TextBox = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 10px auto;
`;

export const Text = styled.h2`
  display: flex;
  width: 100%;
  font-weight: 600;
  color: #fff;
`;
export const TextTwo = styled.h6`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 500;
  color: #fff;
`;

export const LinkButton = styled.button`
  display: flex;
  opacity: 0;
  width: 75px;
  height: 75px;
  z-index: 1;
  color: #fff;
  cursor: pointer;
  margin-right: -75px;
  justify-content: flex-end;
  align-items: flex-end;
  background: red;
  border: none;
  transition: 0.2s ease;
  clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0 100%);
  &:hover {
    background: #222;
    color: #fff;
  }
`;

export const TrendLogo = styled.span`
  color: #fff;
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
`

export const CardBox = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: row;
  margin: 20px auto;
  justify-content: space-between;
`;
export const Card = styled.div`
  display: flex;
  width: 23%;
  height: 500px;
  box-shadow: 0 5px 15px rgba(1 1 1/ 35%);
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  margin: 20px 0px;
  &:hover button {
    opacity: 1;
    margin-right: 0px;
  }
`;
export const SaveBox = styled.div`
  display: flex;
`;
export const CardTextBox = styled.div`
  display: flex;
  width: 90%;
  margin: 2% auto;
  /* padding: 8px; */
  height: 40%;
  flex-direction: column;
`;
export const CardText = styled.h4`
  margin: 0;
  padding: 0;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;
export const CardImageBox = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 60%;
  border-radius: 8px;
  background-size: cover;
  justify-content: space-between;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
export const CardRating = styled.div`
  padding: 0;
`;
export const CardHeart = styled.span`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  cursor: pointer;
`;
export const CardCart = styled.span`
  display: flex;
  padding: 5px;
  margin: 0;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

export const CardBottomBox = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-between;
`;
export const CardP = styled.p`
  display: flex;
  width: 100%;
  height: 67%;
  margin-top: 5px;
`;

export const CardButton = styled.button`
  display: flex;
  border: none;
  padding: 2px 0;
  background: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  background-color: red;
  border-radius: 6px;
  transition: 0.3s ease;
  &:hover {
    background-color: #444;
    color: #fff;
  }
`;
export const CardSpan = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 700;
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 13%;
  width: 100%;
`;
