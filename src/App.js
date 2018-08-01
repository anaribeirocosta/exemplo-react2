import React, { Component } from 'react';
import './App.css';
import Pontuacao from './components/pontuacao'

class App extends Component {
  render() {
    return (
      <div className="placar">
        <Pontuacao nomeTime="Chapecoense" />
        X
        <Pontuacao nomeTime="Corinthians"/>
      </div>
    );
  }
}

export default App;
