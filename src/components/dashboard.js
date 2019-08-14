import React from 'react';
import Layout from "./layout";
import {Get} from "../helpers/services";

class Dashboard extends React.Component {

    state = {

    };

    componentDidMount(){
        window.scroll(0,0);
        this.fetch();
    }

    fetch=()=>{
        Get("/admin/analytics").then((result)=>{
            if(result.status === 1){
                this.setState(result.data[0]);
            }
        })
    };
    render() {
        const {state} = this;
        return (
            <Layout title="Status">
                <div className="container mt-4">
                    <div className="row dashbox">
                        <div className="col ">
                            <div className="box text-center">
                                <div className="inner border rounded  text-center"> {state.properties}</div>
                                <div className="mt-4"><h3>Properties</h3></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box text-center">
                                <div className="inner border rounded  text-center">{state.agents}</div>
                                <div className="mt-4 font-weight-lighter"><h3>Agents</h3></div>
                            </div>
                        </div>

                    </div>


                </div>
            </Layout>

        );
    }
}

export default Dashboard;
