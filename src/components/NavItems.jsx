import React, {Component} from 'react';
import styled from '@emotion/styled';
import {Flex} from './elements';

const ChangeThemeButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 0px;
  background: ${({bgColor}) => bgColor};
  color: ${({textColor}) => textColor};

  &:focus {
    outline: none;
  }
`;

const NavItemsContainer = styled(Flex)`
  justify-content: center;
  width: 400px;
`;

const NavItems = ({
  theme,
  changeTheme
}) => {
  return (
    <NavItemsContainer>
      <ChangeThemeButton
        onClick={changeTheme}
        bgColor={theme.bgColor}
        textColor={theme.textColor}>Change Theme
      </ChangeThemeButton>
    </NavItemsContainer>
  );
};

export default NavItems;
