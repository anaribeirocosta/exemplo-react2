import React, { Component } from 'react';
import './pontuacao.css';

class Pontuacao extends Component {
  constructor(props){
      super(props);
      this.time = "Time da Casa";
  }  

  atualizar =()=>{
    this.props.cliqueBotao(this.props.numero);
  }

  render(){
    if(this.props.visitante ==="true"){
      this.time = "Time visitante";
    }

    return(
    <div className="pontuacao">
        <h1>{this.props.nomeTime || this.time}</h1>
        <h2>{this.props.gols}</h2>
        <button onClick= {this.props.cliqueBotao} className="gol"> Foi Gol! </button>
    </div>
    );
  }
}

export default Pontuacao;
