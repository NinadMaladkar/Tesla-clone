import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/cars/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="/">
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="/">Shop </a>
        <a href="/">Tesla Account </a>
        <RightMenuIcon onClick={() => setBurgerMenuStatus(!burgerMenuStatus)} />
        <BurgerNav show={burgerMenuStatus}>
          <CloseWrapper>
            <CustomClose
              onClick={() => {
                setBurgerMenuStatus(!burgerMenuStatus);
              }}
            />
          </CloseWrapper>
          {cars &&
            cars.map((car, index) => {
              return (
                <li>
                  <a key={index} href="/">
                    {car}
                  </a>
                </li>
              );
            })}
          <li>
            <a href="/">Existing Inventory</a>
          </li>
          <li>
            <a href="/">Used Inventory</a>
          </li>
          <li>
            <a href="/">Trade-In</a>
          </li>
          <li>
            <a href="/">Cyber Truck</a>
          </li>
          <li>
            <a href="/">Roadster</a>
          </li>
        </BurgerNav>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenuIcon = styled(MenuIcon)``;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 20px 0;
    border-bottom: 1px solid black;
  }

  a {
    font-weight: 600;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
