import React from 'react';
import {Get, Post} from "../../helpers/services";

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

                <form onSubmit={props.formHandler}>

                    <div className="form-group">
                        <input type="text" className="form-control" onChange={props.onChange} placeholder="Agent Id" value={state.agent_id} name="agent_id"/>
                    </div>

                    <div className="form-group">
                        <input type="text" onChange={props.onChange} className="form-control" placeholder="Title" value={state.title} name="title"/>
                    </div>

                    <div className="form-group">
                        <select className="form-control" name="status_id" onChange={props.onChange}>
                            <option value="" disabled selected hidden>Property Status / Category</option>
                            {
                                this.state.statuses.map(data=>(
                                    <option selected={state.status_id-0 === data.id-0} value={data.id}>{data.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <select className="form-control" name="type_id" onChange={props.onChange}>
                            <option value="" disabled selected hidden>Property Type</option>
                            {
                                this.state.types.map(data=>(
                                    <option selected={state.type_id-0 === data.id-0} value={data.id}>{data.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <select className="form-control" name="label_id" onChange={props.onChange}>
                            <option value="" disabled selected hidden>Label</option>
                            {
                                this.state.labels.map(data=>(
                                    <option selected={state.label_id-0 === data.id-0} value={data.id}>{data.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <select className="form-control" onChange={props.onChange} name="bedrooms">
                            <option value="" disabled selected hidden>Bedrooms</option>
                            {this.state.nums.map(data=>(
                                <option selected={state.bedrooms-0 === data} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <select className="form-control" onChange={props.onChange} name="bathrooms">
                            <option value="" disabled selected hidden>Bathrooms</option>
                            {this.state.nums.map(data=>(
                                <option selected={state.bathrooms-0 === data} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <select className="form-control" onChange={props.onChange} name="toilets">
                            <option value="" disabled selected hidden>Toilets</option>
                            {this.state.nums.map(data=>(
                                <option selected={state.toilets-0 === data} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <select className="form-control" onChange={props.onChange} name="parking">
                            <option value="" disabled selected hidden>Parking space</option>
                            {this.state.nums.map(data=>(
                                <option selected={state.parking-0 === data} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>


                    <div className="form-group">
                        <input type="number" className="form-control" onChange={props.onChange} placeholder="Price" value={state.price} name="price"/>
                    </div>


                    <div className="form-group">
                        <select name="state_id" onChange={this.locality} className="form-control">
                            <option value="" disabled selected hidden>State</option>
                            {
                                this.state.states.map(data=>(
                                    <option selected={state.state_id-0 === data.id-0} value={data.id}>{data.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <select name="locality_id" onChange={props.onChange} className="form-control">
                            <option value="" disabled selected hidden>Locality</option>
                            {
                                this.state.localities.map(data=>(
                                    <option selected={state.locality_id-0 === data.id-0} value={data.id}>{data.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="Text" className="form-control" onChange={props.onChange} id="location" name="address" value={state.address} placeholder="address"/>
                    </div>

                    <div className="form-group">
                        <textarea className="form-control" rows="5" onChange={props.onChange} name="description" value={state.description} placeholder="Description"/>
                    </div>

                    <div className="form-group">
                        <button disabled={state.disabled} className="btn-block">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
