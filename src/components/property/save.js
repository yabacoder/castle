import React from 'react';
import Layout from "../layout";
import {Link} from "react-router-dom";
import {Post} from "../../helpers/services";
import Form from "./form";
import {showAlert} from "../../helpers/alert";

class SaveProperty extends React.Component {

    defaultState={
        title: "",
        description: "",
        address: "",
        agent_id: "",
        bathrooms: "",
        bedrooms: "",
        disabled: false,
        label_id: "",
        locality_id: "",
        parking: "",
        price: "",
        state_id: 25,
        status_id: "",
        errors: {}
    };
    constructor(props) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount(){
        window.scroll(0,0);
        this.setState(sessionStorage)
    }


    onChange =(e) =>{
        if (this.state.errors[e.target.name]){
            delete this.state.errors[e.target.name];
        }
        this.setState({[e.target.name]:e.target.value});
        sessionStorage.setItem(e.target.name,e.target.value);
    };

    formHandler=(e)=>{
        e.preventDefault();
        this.setState({disabled: true});
        Post("/admin/properties/save", this.state).then(result=>{
            if (result.status === 1){
                showAlert(result.message);
                this.setState(this.defaultState);
                sessionStorage.clear();
            }else if (result.errors){
                this.setState({errors:result.errors})
            }
            this.setState({disabled: false});
        }).catch((e)=>{
            console.error(e)
        })
    };

    render() {
        const {state} = this;
        return (
            <Layout title="Add Property">
                <Form state={state} onChange={this.onChange} formHandler={this.formHandler}/>
            </Layout>
        );
    }
}

export default SaveProperty;
