import styled from "styled-components";

export const Body = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
  background-size: cover;
`;
export const LoginBox = styled.div`
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  color: white;
`;
export const H = styled.div`
  /* float: left; */
  width: 38%;
  margin-left: 30%;
  font-size: 40px;
  border-bottom: 6px solid #009899;
  margin-bottom: 50px;
  padding: 13px 0;
`;
export const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  width: 80%;
  /* float: left; */
  margin: 0 10px;
`;
export const TextBox = styled.div`
  width: 100%;
  owarflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 20px 0;
  border-bottom: 1px solid #009899;
`;
export const Btn = styled.button`
  width: 100%;
  background: none;
  border: 2px solid #009899;
  color: white;
  padding: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 12px 0;
  transition: 0.3s ease;
  &:hover {
    background: #009899;
    color: #000;
    box-shadow: 0 0 7px #009899;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: #fff;
`;
