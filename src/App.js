import React, { Component } from 'react';
import './App.css';
import Pontuacao from './components/pontuacao'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time1: '',
      time2: '',
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
  }
  
  // renomear1= (event) =>{
  //   this.setState(
  //     {
  //       time1: event.target.value
  //     }
  //   );
  // }
  //   renomear2 = (event) =>{
  //     this.setState(
  //       {
  //         time2: event.target.value
  //       }
  //     );
  // }

  mudarNome = (event) =>{
    if (event.target.name === "1"){
      this.setState({
      time1: event.target.value
      })}
    if (event.target.name === "2") {
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
      placar2: this.state.placar2 + 1
    })};
}

  render() {
    return (
      <div>
        <div className="placar">
        
          <Pontuacao cliqueBotao = {this.incrementar} nomeTime={this.state.time1} gols={this.state.placar1} numero="1" />
          X
          <Pontuacao cliqueBotao = {this.incrementar} nomeTime={this.state.time2} gols={this.state.placar2} numero="2" visitante="true"/>
        </div>
        <div className="controles">
          <label for="">Time da Casa</label>  
          <input name= "1" value= {this.state.time1} /*onChange={this.renomear1}*/ onChange={this.mudarNome} type="text" placeholder="Digite o nome do time da casa"/>
          <label for="">Time Visitante</label>
          <input name= "2" value= {this.state.time2} /*onChange={this.renomear}*/ onChange={this.mudarNome}  type="text" placeholder="Digite o nome do time visitante"/>
          <button onClick = {this.reiniciar}> Reiniciar </button>
        </div>
      </div>
    );
  }
}
export default App;
