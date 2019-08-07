import React from 'react';
import Side from "./side";
import Alert from "../../helpers/alert";

class Layout extends React.Component {
    render() {
        const { props } = this;
        return (
            <div className="wrapper">
                <Side/>
                <Alert/>
                <div id="content">
                    <h2 className="layout dashstatus mb-2 text-center">{props.title}</h2>
                    {props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
