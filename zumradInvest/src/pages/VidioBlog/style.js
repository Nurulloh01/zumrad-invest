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
