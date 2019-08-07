import React from 'react';
import {Get, Post} from "../../helpers/services";
import {Input, Select, Textarea} from "../../helpers/form";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            states: [],
            localities: [],
            types: [],
            labels: [],
            statuses: [],
            nums : [1,2,3,4,5,6,7,8,9,10]
        }
    }
    componentDidMount(){
        window.scroll(0,0);
        this.fetch()
    }

    fetch=()=>{
        Get('/states').then(result=>{
            if (result.status === 1) {
                this.setState({states: result.data})
            }
        });
        Get('/localities/'+this.props.state.state_id).then(result=>{
            if (result.status === 1) {
                this.setState({localities: result.data})
            }
        });
        Get('/property_types').then(result=>{
            if (result.status === 1) {
                this.setState({types: result.data})
            }
        });
        Get('/property_statuses').then(result=>{
            if (result.status === 1) {
                this.setState({statuses: result.data})
            }
        });
        Get('/labels').then(result=>{
            if (result.status === 1) {
                this.setState({labels: result.data})
            }
        });
    };

    locality=(e)=>{
        const state = e.target.value;
        this.props.onChange(e);

        this.setState({state_id:state});

        Get('/localities/'+state).then(result=>{
            if (result.status === 1) {
                this.setState({localities: result.data})
            }
        });
    };



    render() {
        const {props} = this;
        const {state} = props;
        return (
            <div className="container mt-3">

                <form onSubmit={props.formHandler} className="form-group card">

                    <div className="row">
                        <div className="col-md-12 pdt">
                            <Input label="Title" error={state.errors.title} onChange={props.onChange} value={state.title} name="title"/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Property Status / Category" error={state.errors.status_id} selected={state.status_id} options={this.state.statuses} name="status_id" onChange={props.onChange}/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Input label="Agent Id" onChange={props.onChange} error={state.errors.agent_id} type="number" placeholder="e.g 3058" value={state.agent_id} name="agent_id"/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Property Type" name="type_id" error={state.errors.type_id} selected={state.type_id-0} options={this.state.types} onChange={props.onChange}/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Label" name="label_id" error={state.errors.label_id} selected={state.label_id-0} options={this.state.labels} onChange={props.onChange}/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Bedrooms" name="bedrooms" error={state.errors.bedrooms} selected={state.bedrooms-0} options={this.state.nums} onChange={props.onChange}/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Bathrooms" name="bedrooms" error={state.errors.bathrooms} selected={state.bathrooms-0} options={this.state.nums} onChange={props.onChange}/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Toilets" name="toilets" error={state.errors.toilets} selected={state.toilets-0} options={this.state.nums} onChange={props.onChange}/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Parking space" name="parking" error={state.errors.parking} selected={state.parking-0} options={this.state.nums} onChange={props.onChange}/>
                        </div>

                        <div className="col-md-12 pdt">
                            <Input label="Price" type="number" onChange={props.onChange} error={state.errors.price} value={state.price} name="price"/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="State" name="state_id" error={state.errors.state_id} selected={state.state_id-0} options={this.state.states} onChange={this.locality}/>
                        </div>

                        <div className="col-md-6 pdt">
                            <Select label="Locality" name="locality_id" error={state.errors.locality_id} selected={state.locality_id-0} options={this.state.localities} onChange={props.onChange}/>
                        </div>

                        <div className="col-md-12 pdt">
                            <Input label="Address" type="text" error={state.errors.address} onChange={props.onChange} name="address" value={state.address} placeholder="address"/>
                        </div>

                        <div className="col-md-12 pdt">
                            <Textarea label="Description" error={state.errors.description} onChange={props.onChange} name="description" value={state.description}/>
                        </div>
                    </div>

                    <div align="right" className="pdt">
                        <button disabled={state.disabled}> Submit </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
