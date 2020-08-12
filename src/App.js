import React from 'react';
import './App.css';

// Criando c component 
class App extends React.Component {

  // Criando construtor
  constructor(props) {

    // Executando o construtor da Super Class
    super(props)

    // Definindo o estado inicial
    this.state = {
      clicked: false
    }

  }

  // Função para alterar o estado
  changeClicked() {
    this.setState({ clicked: !this.state.clicked })
  }

  // Função para recurepar valor dependendo do estado
  getLabel() {
    if (this.state.clicked) {
      return "ESTÁ LIGADO"
    } else {
      return "ESTÁ DESLIGADO"
    }
  }

  // Função que renderiza o componente
  render() {
    return (
      <button onClick={() => this.changeClicked()} className="btn btn-primary">
        {this.getLabel()}
      </button>
    )
  }

}

export default App;
