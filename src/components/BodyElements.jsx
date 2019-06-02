import React, { Component } from 'react'
import styled from '@emotion/styled';
import { ThemeContext } from './ThemeContext';

const BodyElementsContainer = styled.div`
  padding: 20px;
  font-size: 18px;
  margin: 20px;
  height: 150px;
  color: ${({theme: {textColor}}) => textColor};
  background: ${({theme: {bgColor}}) => bgColor};
  border: 1px solid ${({theme: {textColor}}) => textColor};
`;

export class BodyElements extends Component {

  componentDidMount() {
    console.log(this.context)
  }

  render() {
    const {theme} = this.context;
    return (
      <BodyElementsContainer theme={theme}>
        Body Elements
      </BodyElementsContainer>
    )
  }
}

BodyElements.contextType = ThemeContext;

export default BodyElements;
