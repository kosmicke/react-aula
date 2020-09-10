import React from 'react'
import authService from '../../services/auth.service';

import { Redirect }  from 'react-router-dom'

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : "",
            redirectTo : null
        }
    }

    sendLogin = async (event) => {
        event.preventDefault();
        
        const data = {
            nickName : this.state.username,
            password: this.state.password
        }

        try {
            let res = await authService.authenticate(data)
            console.log("res", res.data)
            authService.setLoggedUser(res.data.data)
            this.setState({redirectTo : "/"})
        } catch (error) {
            console.log(error)
            alert("Erro ao efeturar login.")
        }

    }


    render() {

        if(this.state.redirectTo){
            return(
                <Redirect to={this.state.redirectTo}/>
            )
        }

        return (
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 w-50">
                    <div className="card-body">
                        <form onSubmit={this.sendLogin}>
                            <div className="form-group">
                                <label htmlFor="nickName">Usuário</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="nickName" 
                                    name="nickName" 
                                    placeholder="Usuário" 
                                    value={this.state.username}
                                    onChange={e => this.setState({username : e.target.value})}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password" 
                                    placeholder="Senha"
                                    value={this.state.password}
                                    onChange={e => this.setState({password : e.target.value})}
                                    />
                            </div>
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginPage;
