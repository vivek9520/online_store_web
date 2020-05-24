import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminPage extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ADMIN</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add Categories</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Home</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Product Management</Link>
                        </li>

                        <li className="navbar-item">
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                        </li>
                        <li className="navbar-item">
                            <Link to="/register" className="nav-link" style={{float:'right'}}>Register</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default AdminPage;
