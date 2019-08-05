import React from 'react';
import Layout from "../layout";
import {Link} from "react-router-dom";

class SaveProperty extends React.Component {
    render() {
        return (
            <Layout title="Add Property">
                <div className="container mt-3">

                    <form >
                        <div className="form-group">
                            <input type="text" className="form-control" id="fname" placeholder="Full Name" name="fname"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="ptype">
                                <option value="" disabled selected hidden>Property Type</option>
                                <option>Flat</option>
                                <option>Self contain</option>
                                <option>Duplex</option>
                                <option>Estate</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="Bathrooms">
                                <option value="" disabled selected hidden>Bathrooms</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="Toilets">
                                <option value="" disabled selected hidden>Toilets</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control" id="pspace">
                                <option value="" disabled selected hidden>Parking space</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="fname" placeholder="Agent" name="name"/>
                        </div>
                        <div className="form-group">
                            <input type="Text" className="form-control" id="location" placeholder="Location"
                                   name="location"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Description"/>
                        </div>
                        <div className="form-group">
                            <button disabled="disabled" className="form-control">
                                Save
                            </button>

                        </div>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default SaveProperty;
