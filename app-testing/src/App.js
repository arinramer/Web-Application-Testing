import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-top: 5%;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Title><span role="img" aria-label="Baseball emoji">⚾ Batter up ⚾</span></Title>
        <Dashboard />
      </div>
    );
  }
}

export default App;
