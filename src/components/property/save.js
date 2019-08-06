import React from 'react';
import Layout from "../layout";
import {Link} from "react-router-dom";
import {Post} from "../../helpers/services";
import Form from "./form";

class SaveProperty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            state_id: 25
        }
    }

    componentDidMount(){
        window.scroll(0,0);
        this.setState(sessionStorage)
    }


    onChange =(e) =>{
        this.setState({[e.target.name]:e.target.value});
        sessionStorage.setItem(e.target.name,e.target.value);
    };

    formHandler=(e)=>{
        e.preventDefault();
        Post("/admin/properties/save", this.state).then(result=>{
            if (result.status === 1){
                alert(result.message);
                this.state = {};
                sessionStorage.clear();
            }
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
