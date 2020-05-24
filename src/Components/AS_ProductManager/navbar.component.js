import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Product Items</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Categories</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create Items</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/less" className="nav-link">Less Quantity Items</Link>
                        </li>



                    </ul>
                </div>
            </nav>
        );
    }
}
