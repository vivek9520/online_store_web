import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Welcome from "./components/auth/Welcome";

import Navbar from "./components/Navbar"
import {RegisterModal} from "./components/auth/RegisterModel";
import Login from "./components/auth/LoginForm";

import  {RegisterModalst} from "./components/auth/RegisterModelst";
import LoginFormst from "./components/auth/LoginFormst";
import VkViewProducts from "./components/VK_ProductView/VK_ViewProducts";
// import { AdminPage } from "./components/auth/AdminPage";
import Header from "./components/Commen/Header";
import ExtraBar from "./components/Commen/Extra_Bar";
import Wishlist from "./components/VK_ProductView/Wishlist";

import StaffList from "./components/auth/StaffList";
import EditStaff from "./components/auth/EditStaff";
import CreateStaff from "./components/auth/CreateStaff";


class App extends Component {
    // componentDidMount() {
    //     store.dispatch(loadUser());
    // }


    state={
        uname:""
    }
    dologout(){
        localStorage.clear()

        window.location='/customerLogin'


    }

    parseJwt(token) {
        if (!token) {
            return;
        }
        const base64Url = token.split(".")[1];
        // const base64 = base64Url.replace().replace();
        return JSON.parse(window.atob(base64Url));
    }
    componentWillMount() {
        try {
            if (!localStorage.token) {
                return;
            }
            let payload = this.parseJwt(localStorage.getItem("token"));
            // this.setState( {
            //     // let newUserData = { ...prevState.newUserData };
            //     newUserData :payload.name;
            //
            // });
            this.setState({
                uname:payload.email6

            });



            console.log("THE USER", payload.email6, this.state.uname);
        } catch (error) {
            alert("user not logged in");
        }

    }



    render() {
        return (
            <BrowserRouter>
                <Route>
                    <div className={"App"}>
                        <Header/>


                        <Route exact path="/" component={VkViewProducts}/>
                        <Route exact path="/Login" component={Login}/>
                        <Route exact path="/Register" component={RegisterModal}/>
                        <Route exact path="/Loginst" component={LoginFormst}/>
                        <Route exact path="/Registerst" component={RegisterModalst}/>
                        {/*<Route exact path="/AdminPage" component={AdminPage}/>*/}
                        <Route exact path="/wish" component={Wishlist}/>
                        <Route exact path="/welcome" component={Welcome}/>
                        <Route exact path="/nav" component={StaffList}/>
                        <Route exact path="/ViewProduct" component={VkViewProducts}/>







                    </div>
                </Route>
            </BrowserRouter>
        );
    }
}
export default App;
