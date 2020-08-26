import React from 'react';
import './App.css';
import Header from './components/header/header.component'
// Importando o componente do modal
import AlertModal from './components/alert-modal/alert-modal.component'

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

        // Criando refeência para o header
        this.myHeader = React.createRef();

        // Criando refeência para o modal
        this.myModal = React.createRef();
    }

    componentDidMount(){
    }

    // Função para quando clicar em "Confirmar"
    onModalConfirm(){
        console.log("confirmou", this.state)
    }

    // Função para quando clicar em "Cancelar"
    onModalCancel(){
        console.log("cancelou", this.state)
    }

    // Função para alterar o estado
    changeClicked() {

        this.myHeader.current.insideHeader()
        this.myModal.current.toggleVisible()

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
                <Header title="Aula 10" onTitleClicked={() => console.log("Clicou no título que eu ví!")} ref={this.myHeader}>
                    <button className="btn btn-primary">
                        Sair
                    </button>
                </Header>
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

                {/* Chamando nosso componente e passando as props */}
                <AlertModal 
                    ref={this.myModal} 
                    title="Atenção" 
                    onConfirm={() => this.onModalConfirm()} 
                    onCancel={() => this.onModalCancel()}>
                        {/* Passando children content */}
                        <p>Você foi alertado!</p>
                </AlertModal>
            </section>
        )
    }

}

export default App;
