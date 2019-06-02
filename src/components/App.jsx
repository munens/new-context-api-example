import React, {Component, Fragment} from 'react'
import Header from './Header';
import Body from './Body';
import styled from '@emotion/styled';
import { ThemeContext } from './ThemeContext';

const theme = {
  light: {
    bgColor: 'white',
    textColor: 'black'
  },
  dark: {
    bgColor: 'black',
    textColor: 'white'
  }
};

const Container = styled.div`
  width: 1190px;
  margin: 0 auto;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  render() {
    return (
      <Container>
        <ThemeContext.Provider value={{
          changeTheme: this.changeTheme,
          theme: theme[this.state.theme]
        }}>
          <Header />
          <Body />
        </ThemeContext.Provider>
      </Container>
    );
  }

  changeTheme = () => {
    this.setState({
      theme: (this.state.theme === 'light') ? 'dark' : 'light'
    })
  }
}

export default App;
