import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-size: cover;
  background: rgba(0,0,0,0.2);
`;
export const Banner = styled.div`
  display: flex;
  width: 90%;
  height: 50vh;
  align-items: flex-end;
  
`;
export const Box = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;
export const TextBox = styled.div`
  display: flex;
`;
export const Text = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  flex-direction: column;
`;
export const TextBox1 = styled.div`
  display: flex;
  color: #fff;
  flex-direction: row;
  &:hover {
    cursor: pointer;
  }
`;
export const Text1 = styled.span``;
export const ContentBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  justify-content: space-between;
  flex-direction: row;
`;
export const ContentTwo = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: space-between;
  flex-direction: row;
`;
export const CardBox = styled.div`
  width: 23%;
  position: relative;
  height: 300px;
  flex-direction: column;
  transition: 0.3s ease;
  &:hover {
    margin-top: -13px;
  }
  &:hover div {
    opacity: 1;
  }
`;
export const Card = styled.div`
  display: flex;
  height: 275px;
  flex-direction: column;
  background-size: cover;
`;

export const P = styled.p`
  display: flex;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 275px;
  background-size: cover;
`;
export const Button = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
  color: #fff;
  border-radius: 3px;
  background-size: cover;
  padding: 8px;
  margin-top: -22px;
  opacity: 0;
  cursor: pointer;
  transition: 0.3s ease;
`;
