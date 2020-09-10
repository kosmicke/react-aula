import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/home-page/home-page';
import ChatsPage from './pages/chats-page/chats-page';
import LoginPage from './pages/login-page/login-page';
import authService from './services/auth.service';

// Criando c component 
class App extends React.Component {

    // Criando construtor
    constructor(props) {

        // Executando o construtor da Super Class
        super(props)

        // Definindo o estado inicial
        this.state = {
            userData: null,
        }

    }

    componentDidMount(){
        this.loadUser()
    }

    async loadUser(){
        let userData = authService.getLoggedUser()
        this.setState({userData : userData})
    }

    logout(){
        authService.cleanLoggedUser()
        this.setState({userData : null})
    }

    // Função que renderiza o componente
    render() {

        const routes = [
            { route : "/", view : HomePage, exact : true},
            { route : "/chats", view : ChatsPage, exact : false},
            { route : "/login", view : LoginPage, exact : false},
        ]

        return (
           <BrowserRouter>
                <Header title="Aula 10" onTitleClicked={() => console.log("Clicou no título que eu ví!")} ref={this.myHeader}>
                    <span>
                        {this.state.userData?.user?.name}
                    </span>
                    <button className="btn btn-primary" onClick={e => this.logout()}>
                        Sair
                    </button>
                </Header>
                <Switch>
                    {/* <Route exact path="/" component={HomePage} />
                    <Route path="/chats" component={ChatsPage} />
                    <Route path="/login" component={LoginPage} /> */}
                    {routes.map((item, index) => (
                        <Route key={index} path={item.route} component={item.view} exact={item.exact}/>
                    ))}
                </Switch>
           </BrowserRouter>
        )
    }

}

export default App;
