import styled from "styled-components";

export const Link = styled.link`
  text-decoration: none;
`;

export const MenuA = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  transition: .5s ease;
  &:hover div {
    display: flex;
  }
`;
export const MenuButton = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #fff;
  cursor: pointer;
`;
export const BUTTON = styled.button`
  display: flex;
  background: none;
  border: none;
  color: #fff;
  padding: 15px;
  font-weight: 600;
  justify-content: center;
`;
export const DropDownMenu = styled.div`
  display: none;
  background-size: cover;
  flex-direction: column;
  position: absolute;
  background-color: #f9f9f9;
  width: 300px;
  height: 250px;
  border-radius: 7px;
  margin: 0;
  padding: 0;  
`;
export const A = styled.h5`
  display: flex;
  padding: 15px 25px;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
`;

export const ContainerBox = styled.div`
  position: fixed;
  background: transparent;
  top: 0;
  width: 100%;
  display: flex;
  z-index: 999;
  transition: 0.5s ease;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const Brand = styled.div`
  transition: 0.5s ease;
`;
export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  /* margin-top: 10px; */
  /* margin: 0 auto; */
  justify-content: space-between;
`;
export const TextBox = styled.div`
  display: flex;
  height: 100%;
  margin: 0;
  align-items: center;
`;

export const Text = styled.span`
  padding: 15px;
  font-family: sans-serif;
  color: #fff;
  font-weight: 600;
  border: red;
  transition: 0.5s;
  &:hover {
    border-bottom: 2px solid red;
    transition: 0.1s;
    cursor: pointer;
  }
`;

export const BoxA = styled.div`
  display: flex;
  width: 80%;
`;
export const BoxIcon = styled.img``;
export const BoxTwo = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-end;
`;
export const Icon = styled.div`
  transition: 0.5s;
`;
export const IconBox = styled.div`
  display: flex;
  margin: 0 10px;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const DropMenuLink = styled.div`
  margin: 0;
  padding: 0;
`
