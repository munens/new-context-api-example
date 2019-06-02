import React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from './ThemeContext';

const NavLogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({textColor}) => textColor};
`;

function NavLogo({theme}) {
  return (
    <NavLogoContainer textColor={theme.textColor}>Logo</NavLogoContainer>
  );
};

export default NavLogo;
