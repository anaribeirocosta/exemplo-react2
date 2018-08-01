import React, { Component } from 'react';
import './pontuacao.css';

class Pontuacao extends Component {
  constructor(props){
      super(props);
      this.time = "Time da Casa";
  }  
  render(){
    if(this.props.visitante ==="true"){
      this.time = "Time visitante";
    }
    return(
    <div className="pontuacao">
        <h1>{this.props.nomeTime || this.time}</h1>
        <h2>0</h2>
    </div>
    );
  }
}

export default Pontuacao;
