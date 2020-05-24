import React, {Component} from 'react';
import "../VK_ProductView/CSS/header.css";
import "fontawesome";
import {Link} from 'react-router-dom';
import ItemsList from "../AS_ProductManager/items-list.component";
import EditItem from "../AS_ProductManager/edit-item.component";
import CreateItem from "../AS_ProductManager/create-Item.component";
import CreateCate from "../AS_ProductManager/create-cate.component";
import LessList from "../AS_ProductManager/less-list.component";
import Wishlist from "../VK_ProductView/Wishlist";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const navstyle ={
    color:"white",

}

class Header extends Component {



    render() {
        return (
            <header className="body">
                <nav>
                    <div className="logo">
                        <i className="fa fa-wrench size " ></i> OnShop
                    </div>
                    <div className="hamburger" id="kk">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <ul className="nav-links">


                        <li style={navstyle}>Home</li>

                        <Link to="/viewProduct" >
                        <li style={navstyle}>Products</li>
                        </Link>


                        <Link to="/contact" >
                            <li style={navstyle}>Contact Us</li>
                        </Link>

                        <Link to="/about" >
                            <li style={navstyle}>About</li>
                        </Link>





                    </ul>
                </nav>

            </header>


        );

    }


}

export default Header;
