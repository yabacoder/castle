import React from 'react';
import Layout from "../layout";
import {Link} from "react-router-dom";

class Agents extends React.Component {
    render() {
        return (
            <Layout title="Agents">
                <div className="container mt-3">
                    <div align="right">
                        <Link to="/add_agent"> <button>Add Agent</button> </Link>
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>properties</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td><a href="">Save</a> |<a href="">Edit</a> |<a href="">Delete</a></td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td><a href="">Save</a> |<a href="">Edit</a> |<a href="">Delete</a></td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td><a href="">Save</a> |<a href="">Edit</a> |<a href="">Delete</a></td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td><a href="">Save</a> |<a href="">Edit</a> |<a href="">Delete</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Layout>
        );
    }
}

export default Agents;
