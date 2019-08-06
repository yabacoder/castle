import React from 'react';
import {NavLink} from "react-router-dom";

const menu = [
    {url: "/", label:"Dashboard"},
    {url: "/properties", label:"Properties"},
    {url: "/agents", label:"Agents"},
    {url: "/logout", label:"Logout"},
];

class Side extends React.Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <img src="../../images/logo-01-copy.png" alt="" width="250"/>
                </div>
                <ul className="list-unstyled components">
                    {menu.map((data,index)=>(
                        <li key={index}>
                            <NavLink to={data.url}>
                                {data.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Side;
