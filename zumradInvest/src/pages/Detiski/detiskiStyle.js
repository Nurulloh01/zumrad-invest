import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #333;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 50vh;
  justify-content: flex-start;
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.3);
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
  box-shadow: 0 5px 15px rgba(1 1 1/ 15%);
  flex-direction: column;
  border-radius: 10px;
`;
export const CardTextBox = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
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
  border-radius: 10px 10px 0 0;
`;
export const CardImageBox = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  background-size: cover;
  &:hover div {
    display: block;
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
  padding: 0;
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
  height: 40%;
`;

export const CardButton = styled.button`
  display: flex;
  border: none;
  padding: 2px 0;
  background: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #e6fdfd;
  border-radius: 6px;
  transition: 0.3s ease;
  &:hover {
    background-color: #444;
    color: #fff;
  }
`;
export const CardSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13%;
  width: 100%;
`;
