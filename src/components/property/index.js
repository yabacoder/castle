import React from 'react';
import Layout from "../layout";
import {Link} from "react-router-dom";
import {Get, Post} from "../../helpers/services";
import Pagination from "react-js-pagination";
import {showAlert} from "../../helpers/alert";
import {showLive} from "../auth/live";
import {LiveToken} from "../../config";

class Properties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activePage: 1,
            ids: []
        }

    }

    componentDidMount(){
        window.scroll(0,0);
        this.fetch();
    }

    fetch=(page = this.state.activePage)=>{
        this.setState({ids:[]});
        Get(`/admin/properties?page=${page}`).then((result)=>{
            if(result.status){
                const data = {};
                result.data.data.forEach((x)=>{
                    data[x.id] = x
                });
                this.setState({data: data, total: result.data.total})
            }
        })
    };

    handlePageChange=(pageNumber)=> {
        this.setState({activePage: pageNumber});
        this.fetch(pageNumber);
    };

    select=(e)=>{
        const {ids} = this.state;

        let index = ids.indexOf(""+e.target.value+"");
        if (index > -1){
            ids.splice(index,1);
            this.setState({ids: ids})

        }else {
            this.setState({ids: ids.concat(e.target.value)})
        }
    };

    selectAll=(e)=>{
        this.setState(
            {ids: e.target.checked?Object.keys(this.state.data):[]}
        )
    };

    migrate=(e)=>{
        const {ids}=this.state;
        if (LiveToken){
            Post("/migration/list",{ids}).then((result)=>{
                if (result.status === 1){
                    result.data.forEach((data)=>{
                        Post("/migrate/single",data,true).then((result)=>{
                            if (result.status === 1){
                                Post("/admin/properties/delete",{id: data.id}).then((result)=>{
                                    if (result.status === 1){
                                        const {ids} = this.state;
                                        delete this.state.data[data.id];
                                        let index = ids.indexOf(""+data.id+"");
                                        if (index > -1){
                                            ids.splice(index,1);
                                            this.setState({ids: ids})
                                        }
                                    }
                                })
                            }
                        })
                    })
                }
            })
        } else {
            showLive();
        }

    };

    delete=()=>{
        const {ids}=this.state;
        Post("/admin/properties/delete",{id: ids}).then((result)=>{
            if (result.status === 1){
                for( let id of ids){
                    delete this.state.data[id];
                }
                this.setState({ids: []})
            }
        })
    };


    render() {
        const {data} = this.state;
        return (
            <Layout title="Properties">
                <div className="container mt-3">
                    <div align="right">
                        <Link to="/property/add"> <button>Add Property</button> </Link>
                    </div>
                    <div className="links">
                        <a onClick={this.migrate}>Migrate</a> | <a onClick={this.delete}>Delete</a> | <a onClick={this.fetch}>Refresh</a>
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>
                                <input onChange={this.selectAll} type="checkbox"/>
                            </th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Bedrooms</th>
                            <th>Created At</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(data).map((key,index)=>(
                                <tr key={index}>
                                    <th>
                                        <input value={data[key].id} checked={this.state.ids.indexOf(""+data[key].id+"") > -1} onChange={this.select} type="checkbox"/>
                                    </th>
                                    <td>{data[key].id}</td>
                                    <td>{data[key].title}</td>
                                    <td>{data[key].type}</td>
                                    <td>{data[key].locality+", "+data[key].state}</td>
                                    <td>{data[key].bedrooms}</td>
                                    <td>{data[key].created_at}</td>
                                    <td><Link to={`/property/edit/${data[key].id}`}>Edit</Link> | <a href="">Delete</a></td>
                                </tr>
                            ))

                        }
                        </tbody>
                    </table>

                    <div align="right">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={this.state.total}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        />
                    </div>


                </div>
            </Layout>
        );
    }
}

export default Properties;
