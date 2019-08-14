import React from 'react';
import {Get, Post} from "../../helpers/services";
import Layout from "../layout";
import Form from "./form";

class EditProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            state_id: 25,
            errors:{}
        }
    }

    componentDidMount(){
        window.scroll(0,0);
        this.fetch(this.props.match.params.id);

    }

    fetch=(id)=>{
        Get("/admin/properties/edit/"+id).then((result)=>{
            if(result.status){
                this.setState(result.data);
            }
        })
    };


    onChange =(e) =>{
        this.setState({[e.target.name]:e.target.value});
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
            <Layout title="Edit Property">
                <Form state={state} onChange={this.onChange} formHandler={this.formHandler}/>
            </Layout>
        );
    }
}

export default EditProperty;
