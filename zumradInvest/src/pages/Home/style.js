import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const CarouselContainer = styled.div`
  display: flex;
  height: 600px;
`;
export const ContentBox = styled.div`
  background: #1D1611;
`;
export const Content = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Card = styled.div`
  width: 30%;
  margin: 15px;
`;
export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(1 1 1 /35%);
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SectionTitle = styled.div`
  position: relative;
  color: crimson;
  font-size: 38px;
  font-weight: 800;
  margin: 40px 0;
`;
export const Btn = styled.button`
  color: #fff;
  background: crimson;
  font-size: 17px;
  font-weight: 600;
  display: inline-block;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 2px;
  margin: 30px 0;
  transition: 0.5s ease;
  &:hover {
    background: #fff;
    color: #000;
  }
`;
