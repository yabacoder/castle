import React from 'react';
import Layout from "../layout";

class SaveAgent extends React.Component {
    render() {
        return (
            <Layout title="Add Property">
                <div className="container mt-3">
                    <form action="/action_page.php">
                        <div className="form-group">
                            <input type="text" className="form-control" id="fname" placeholder="Full Name" name="fname"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="fname" placeholder="Company Name"
                                   name="name"/>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" size="14" minLength="9" maxLength="14"
                                   id="telnumber" placeholder="Phone number" name="number"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" name="location"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" name="location"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Bio"/>
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

export default SaveAgent;
