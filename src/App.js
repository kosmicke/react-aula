import React from 'react';
import './App.css';
import Header from './components/header/header.component'

// Criando c component 
class App extends React.Component {

    // Criando construtor
    constructor(props) {

        // Executando o construtor da Super Class
        super(props)

        // Definindo o estado inicial
        this.state = {
            clicked: false,
            buttonClass: "botao-desligado"
        }
    }

    // Função para alterar o estado
    changeClicked() {

        let clicked = !this.state.clicked
        let buttonClass = {}

        if (clicked) {
            buttonClass = "botao-ligado"
        } else {
            buttonClass = "botao-desligado"
        }

        this.setState({ clicked: clicked, buttonClass: buttonClass })
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
            <section>
                <Header></Header>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <button onClick={() => this.changeClicked()} className={this.state.buttonClass}>
                            {this.getLabel()}
                        </button>
                    </div>
                    <div className="col-sm-12 d-flex justify-content-center mt-5">
                        {(this.state.clicked) ? (
                            <div className="alert alert-primary" role="alert">
                                O Botão está ligado
                            </div>
                        ) : (
                            <div className="alert alert-danger" role="alert">
                                O Botão está desligado
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }

}

export default App;
