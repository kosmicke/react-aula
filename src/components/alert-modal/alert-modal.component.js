import React, { Component } from 'react';
import './alert-modal.component.css'

class AlertModal extends Component{

    constructor(props){
        super(props)
        this.state = {
            isHidden : true
        }
    }

    toggleVisible(){
        this.setState({ isHidden : !this.state.isHidden})
    }

    render(){
        let myClasses = this.state.isHidden ? "my-modal-wrapper--hidden" :  "my-modal-wrapper";

        return(
            <div className={myClasses}>
                <div className="my-modal">
                    <h2>{this.props.title}</h2>
                    <div>{this.props.children}</div>
                    <div className="row mt-5">
                        <div className="col">
                            <button className="btn btn-danger mr-2" onClick={() => { this.props.onCancel(); this.toggleVisible();}}>
                                Cancelar
                            </button>
                            <button className="btn btn-primary" onClick={() => { this.props.onConfirm(); this.toggleVisible();}}>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }

}

export default AlertModal;