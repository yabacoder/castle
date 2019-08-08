import React from 'react';
import {LiveToken} from "../../config";
import {AuthGet, Post} from "../../helpers/services";

class LiveLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    show=()=>{
        if (LiveToken || this.state.display){
            this.setState({display:false});
        } else {
            this.setState({display:true});

        }
    };

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    formHandler=(e)=>{
        e.preventDefault();
        this.setState({disabled:true});

        Post("/login", this.state,true).then(result=>{
            if (result.token_type){
                this.user(result.access_token);
            }else if (result.message){
                alert("Email or Password Incorrect!");
                this.setState({disabled:false});
            }
        })
    };

    user=(token)=>{
        AuthGet('/user',token,true).then(result=>{
            if (result.status === 1 && result.data.role.id === 4) {
                localStorage.setItem('castles_token_live', token);
                window.location.reload();
            }else {
                alert("Email or Password Incorrect!")
            }
            this.setState({disabled:false, display:false});
        })
    };


    render() {
        const {state} = this;
        return (
            <div>
                <div className="w3-modal" style={{display: state.display?"block":"none"}}>
                    <div className="w3-modal-content w3-transparent" style={{maxWidth:300}}>
                        <span onClick={this.show} id="live" className="w3-button w3-display-topright">&times;</span>
                        <div className="sign-in">
                            <div className="sign-in-cont sign-width">
                                <header className="head">
                                    <img src="../../images/logo-01-copy.png" alt="" width="250"/>
                                </header>
                                <div className="formsec">
                                    <form onSubmit={this.formHandler}>
                                        <h2>Super Admin</h2>
                                        <div className="row">
                                            <div className="field">
                                        <span>
                                            <input type="email" name="email" onChange={this.onChange} placeholder="Your email" required/>
                                        </span>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="field">
                                        <span>
                                            <input type="password" name="password" placeholder="Your password" onChange={this.onChange} required/>
                                        </span>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <button className="signin" disabled={state.disabled}>
                                                Sign In
                                            </button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LiveLogin;

export function showLive() {
    const live = document.getElementById("live");
    return live.click();
}
