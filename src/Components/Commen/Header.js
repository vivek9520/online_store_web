import React, {Component} from 'react';
import '../CSS/header.css'


class Header extends Component {
    render() {
        return (
            <header className="body">
                <nav>
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>



                    </ul>
                </nav>

            </header>
        );
    }
}

export default Header;