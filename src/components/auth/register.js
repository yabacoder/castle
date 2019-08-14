import React from 'react';
import {AuthGet, Post} from "../../helpers/services";
import {Token} from "../../config";
import {Redirect} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled : false,
            role: 2
        }
    }

    componentDidMount(){
        window.scroll(0,0);

    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    formHandler=(e)=>{
        e.preventDefault();
        this.setState({disabled:true});

        Post("/registration", this.state).then(result=>{
            if (result.token_type){
                localStorage.setItem('castles_token', result.access_token);
                window.location.reload()
            }else if (result.message){
                alert("Email or Password Incorrect!");
            }
            this.setState({disabled:false});
        }).catch(e=>{
            alert("An error occurred!, please try again later");
            this.setState({disabled:false});
        })
    };

    user=(token)=>{
        AuthGet('/user',token).then(result=>{
            if (result.status === 1 && result.data.role.id >= 3) {
                localStorage.setItem('castles_token', token);
                localStorage.setItem('castles_user', JSON.stringify(result.data));
                window.location.reload()
            }else {
                alert("Email or Password Incorrect!")
            }
            this.setState({disabled:false});
        })
    };




    render() {
        const {state} = this;
        if (Token){
            return <Redirect to="/"/>;
        }
        return (
            <div className="logbody">
                <div className="sign-in">
                    <div className="sign-in-cont sign-width">
                        <header className="head">
                            <img src="../../images/logo-01-copy.png" alt="" width="250"/>
                        </header>
                        <div className="formsec">
                            <form onSubmit={this.formHandler}>
                                <h2>Register</h2>
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
                                            <input type="text" name="username" onChange={this.onChange} placeholder="Your username" required/>
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
                                    <div className="field">
                                        <span>
                                            <input type="password" name="password_confirmation" placeholder="Confirm password" onChange={this.onChange} required/>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="signin" disabled={state.disabled}>
                                        Sign Up
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
