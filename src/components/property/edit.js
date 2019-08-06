import React from 'react';
import {Post} from "../../helpers/services";
import Layout from "../layout";
import Form from "./form";

class EditProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
    }

    componentDidMount(){
        window.scroll(0,0);
        this.fetch();
    }

    fetch=()=>{

    };

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    formHandler=(e)=>{
        e.preventDefault();
        Post("/admin/properties").then(result=>{
            if (result.status === 1){

            }
        })
    };

    render() {
        const {state} = this;
        return (
            <Layout title="Edit Property">
                <Form state={state} onChange={this.onChange} formHandler={this.formHandler}/>
            </Layout>
        );
    }
}

export default EditProperty;
