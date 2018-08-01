import React, { Component } from 'react';
import './App.css';
import Pontuacao from './components/pontuacao'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time1: '',
      time2: '',
      time: '',
      placar1: 0,
      placar2: 0
    }
  }
  reiniciar = () => {
    this.setState(
      {
        placar1: 0,
        placar2: 0
       });
       this.mudarNome()
  }
  
  mudarNome = (event) =>{
    if (event.target.numero === "1"){
      this.setState({
      time1: event.target.value
      })}
    if (event.target.numero === "2") {
      this.setState({
      time2: event.target.value
      })}  
  }

incrementar= time =>{
  if (time === "1"){
  this.setState({
    placar1: this.state.placar1 + 1
  })} 
  if (time === "2"){
    this.setState( {
      placar1: this.state.placar2 + 1
    })};
}

  render() {
    return (
      <div>
        <div className="placar">
        
          <Pontuacao cliqueBotao = {this.incrementar} nomeTime={this.state.time1} gols={this.state.placar1} numero="1" />
          X
          <Pontuacao cliqueBotao = {this.incrementar} nomeTime={this.state.time2} gols={this.state.placar2} numero="2" />
        </div>
        <div className="controles">
          <label for="">Time da Casa</label>  
          <input numero = "1" time1= {this.state.value} onChange={this.mudarNome} type="text" placeholder="Digite o nome do time da casa"/>
          <label for="">Time Visitante</label>
          <input numero = "2" time2= {this.state.value} onChange={this.mudarNome} type="text" placeholder="Digite o nome do time visitante"/>
          <button onClick = {this.reiniciar}> Reiniciar </button>
        </div>
      </div>
    );
  }
}
export default App;
