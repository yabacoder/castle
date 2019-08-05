import React from 'react';
import Layout from "../layout";
import {Link} from "react-router-dom";
import {Get} from "../../helpers/services";

class Properties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }

    }

    componentDidMount(){
        window.scroll(0,0);
        this.fetch();
    }

    fetch=()=>{
        const data = {};
        let x;

        Get("/admin/properties").then((result)=>{
            if(result.status){
                for (x of result.data.data){
                    data[x.id] = x
                }
                this.setState({data:data})
            }
        })
    };



    render() {
        const {data} = this.state;
        return (
            <Layout title="Properties">
                <div className="container mt-3">
                    <div align="right">
                        <Link to="/add_property"> <button>Add Property</button> </Link>
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(data).map((key,index)=>(
                                <tr key={index}>
                                    <th>{data[key].id}</th>
                                    <td>{data[key].title}</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                    <td>
                                        <select className="form-control" id="pspace">
                                            <option value="" disabled selected hidden>Status</option>
                                            <option>Pending</option>
                                            <option>Active</option>
                                            <option>Suspended</option>
                                        </select>
                                    </td>
                                    <td><a href="property.html">View</a> |<a href="">Suspend</a> |<a href="">Delete</a></td>
                                </tr>
                            ))

                        }
                        </tbody>
                    </table>


                </div>
            </Layout>
        );
    }
}

export default Properties;
