import React from "react";
import styled from "styled-components";

interface Props {}

const NavBar = () => (
  <Header className="navbar">
    <Title className="navbar__title navbar__item">Hank's Homepage</Title>
    <Item className="navbar__item">Waves</Item>
    <Item className="navbar__item">3D Grid</Item>
  </Header>
);

const Header = styled.div`
  display: flex;
  align-items: center;
  background: rebeccapurple;
  color: white;
  font-family: Helvetica;
  font-weight: 300;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 10;
`;

const Title = styled.div`
  margin-right: auto;
  font-size: 150%;
  padding: 12px 16px;
`;

const Item = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
`;

export default NavBar;
