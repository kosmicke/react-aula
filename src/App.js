import React from 'react';
import logo from './logo.svg';
import './App.css';

// Criando function component 
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
      return "ESTÁ LIGADO CLASS"
    } else {
      return "ESTÁ DESLIGADO CLASS"
    }
  }

  // Função que renderiza o componente
  render() {

    // // Criando elemento 
    // let elem = React.createElement(
    //   'button', // Tipo
    //   { onClick: () => this.changeClicked() }, // Atributos
    //   this.getLabel() // Conteúdo
    // )

    // // Retornando elemento
    // return elem

    return (
      <div className="row">
        
        {(this.state.clicked) ? (
          <div className="col-sm-6">
            <button onClick={() => this.changeClicked()} className="btn btn-primary">
              {this.getLabel()}
            </button>
          </div>
        ) : (
          <div className="col-sm-6">
            <button onClick={() => this.changeClicked()} className="btn btn-danger">
              {this.getLabel()}
            </button>
          </div>
        )}
      </div>
    )
  }

}

export default App;
