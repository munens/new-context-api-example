import React, {Component} from 'react';
import styled from '@emotion/styled';
import NavItems from './NavItems';
import NavLogo from './NavLogo';
import {Flex} from './elements';
import { ThemeContext } from './ThemeContext';

const NavContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme: {textColor}}) => textColor};
  height: 100px;
  padding: 20px;
  background: ${({theme: {bgColor}}) => bgColor};
`;

const Navbar = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const {theme} = value;
        return (
          <NavContainer theme={theme}>
            <NavLogo theme={theme} />
            <NavItems {...value} />
          </NavContainer>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Navbar;
