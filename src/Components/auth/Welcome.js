import React, {Component, Fragment, useContext} from "react";


import { connect } from "react-redux";



import { Link } from "react-router-dom";

//import  Logout from '../user_login/components/auth/Logout'

import { AdminPage } from './AdminPage';



import Register from './RegisterModel'
import Registerst from './RegisterModelst'




class Welcome extends Component{

    dologout(){
        localStorage.clear()

        window.location='/'


    }
    // namemethod(){
    //     let payload = this.parseJwt(localStorage.getItem("token"))
    //     if(localStorage.length !== 0){
    //         return(
    //             <div>
    //                 <h2>
    //                     {payload.name}
    //                 </h2>
    //             </div>
    //         )
    //     }
    //     else{
    //
    //     }
    // }
    isAuth(){
        let payload = this.parseJwt(localStorage.getItem("token"))
        if(localStorage.length !== 0){
            return (

<div>
                    <a  className="d-inline p-2 text-dark" onClick={this.dologout}>LOGOUT</a>
</div>

            )

        }else{
            return (
                <div>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li>
                                    <Link to="/Loginst" className="nav-link">Staff Login</Link>

                                </li>
                                <li>
                                    <Link to="/Register" className="nav-link">Register</Link>

                                </li>
                                <li>
                                    <Link to="/Registerst" className="nav-link">Staff Register</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            ) }
    }



    parseJwt(token) {
        if (!token) {
            return;
        }
        const base64Url = token.split(".")[1];
        // const base64 = base64Url.replace().replace();
        return JSON.parse(window.atob(base64Url));
    }

    render() {
        let payload = this.parseJwt(localStorage.getItem("token"))


        const authLinks=(

            <Fragment>
                <div>
            <span className="navbar-text mr-3">
            <p></p>

            </span>

                </div>
            </Fragment>

        )

        const guestLinks=(
            <Fragment>
                <div>

                    <Register/>



                </div>
            </Fragment>
        )

        return (
            <header className="header-section">
                <div className='navbar'>



                    <h3 className='text-right'>


                    </h3>
                    <div>


                        <div className='ml-auto'>

                        </div>


{/*{this.namemethod()}*/}
                        {this.isAuth()}
                        <span></span></div>
                </div>






                {/*<div className="nav-item">*/}
                {/*    <div className="container">*/}
                {/*        <div className="nav-depart">*/}
                {/*            <div className="depart-btn">*/}
                {/*                <i className="ti-menu"></i>*/}
                {/*                <span>All departments</span>*/}
                {/*                <ul className="depart-hover">*/}
                {/*                    <li className="active">*/}
                {/*                        <a href="#">Women’s Clothing</a>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <a href="#">Men’ss Clothing</a>*/}
                {/*                    </li>*/}
                {/*                    <li>*/}
                {/*                        <a href="#">Accessories/Shoes</a>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <nav className="nav-menu mobile-menu">*/}
                {/*            <ul>*/}
                {/*                <li className="active">*/}
                {/*                    <a href="/">Home</a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a href="">Shop</a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a href="#">Collection</a>*/}
                {/*                    <ul className="dropdown">*/}
                {/*                        <li>*/}
                {/*                            <a href="/">Men's</a>*/}
                {/*                        </li>*/}
                {/*                        <li>*/}
                {/*                            <a href="#">Women's</a>*/}
                {/*                        </li>*/}
                {/*                        <li>*/}
                {/*                            <a href="#">Accessories/Shoes</a>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </li>*/}

                {/*                <li>*/}
                {/*                    <a href=''>Contact</a>*/}
                {/*                </li>*/}
                {/*                <li>*/}
                {/*                    <a href="#">More</a>*/}
                {/*                    <ul className="dropdown">*/}

                {/*                        <li>*/}
                {/*                            <a href=""> Staff Login</a>*/}
                {/*                        </li>*/}

                {/*                    </ul>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </nav>*/}
                {/*        <div id="mobile-menu-wrap"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </header>
        );
    }
}
export default Welcome;
