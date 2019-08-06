import React from 'react';
import Layout from "../layout";
import {Link} from "react-router-dom";
import {Get} from "../../helpers/services";
import Pagination from "react-js-pagination";

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
        this.fetch(this.state.activePage);
    }

    fetch=(page)=>{
        const data = {};
        let x;
        Get(`/admin/properties?page=${page}`).then((result)=>{
            if(result.status){
                for (x of result.data.data){
                    data[x.id] = x
                }
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
            // {ids: this.state.ids.length === Object.keys(this.state.data).length?[]:Object.keys(this.state.data)}
            {ids: e.target.checked?Object.keys(this.state.data):[]}
            )
    };


    render() {
        const {data} = this.state;
        return (
            <Layout title="Properties">
                <div className="container mt-3">
                    <div align="right">
                        <Link to="/property/add"> <button>Add Property</button> </Link>
                    </div>
                    <div>
                        <a href="">Migrate</a> | <a href="">Delete</a>
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
