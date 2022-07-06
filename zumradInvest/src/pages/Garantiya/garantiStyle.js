import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  align-items: flex-end;
  position: relative;
  background: rgba(0, 0, 0, .2);
`;
export const Box = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
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
  box-shadow: 0 5px 15px rgba(1 1 1/15%);
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
  height: 100%;
  background: #222;
`;
export const Content = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  margin-bottom: 20px;
  height: 35vh;
  flex-direction: column;
  border: 1px solid grey;
  background: #fff;
`;
export const ContentText = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 30px;
  font-weight: 600;
`;
export const ContentIconBox = styled.div`
  display: flex;
  width: 90%;
  margin: 15px auto;
`;
export const ContentParagraf = styled.h5`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 25px;
  font-weight: 600;
`;
