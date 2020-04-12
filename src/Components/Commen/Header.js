import React, {Component} from 'react';
import "../VK_ProductView/CSS/header.css";
import "fontawesome";

class Header extends Component {
    render() {
        return (
            <header className="body">
                <nav>
                    <div className="logo">
                        <i className="fa fa-wrench size "></i> OnShop
                    </div>
                    <div className="hamburger" id="kk">
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
const s = document.querySelector("body");
const a = document.querySelector(".nav-links");
s.addEventListener("click",() =>{
a.classList.toggle("open");
})
export default Header;