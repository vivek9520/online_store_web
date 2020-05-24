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
import Home from "./components/Home";

import Navbar1 from "./components/AS_ProductManager/navbar.component"
import ItemsList from "./components/AS_ProductManager/items-list.component";
import EditItem from "./components/AS_ProductManager/edit-item.component";
import CreateItem from "./components/AS_ProductManager/create-Item.component";
import CreateCate from "./components/AS_ProductManager/create-cate.component";
import LessList from "./components/AS_ProductManager/less-list.component";

import loginStore  from './components/auth/LoginFormst'

import StaffList from "./components/auth/StaffList";
import EditStaff from "./components/auth/EditStaff";
import CreateStaff from "./components/auth/CreateStaff";
import LoginFormad from "./components/auth/LoginFormad";

import RegisterModelad from "./components/auth/RegisterModelad";


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


                        <Route exact path="/" component={Header}/>
                        <Route exact path="/" component={ExtraBar}/>

                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Login" component={Login}/>
                        <Route exact path="/Register" component={RegisterModal}/>
                        <Route exact path="/Loginst" component={LoginFormst}/>
                        <Route exact path="/Registerst" component={RegisterModalst}/>
                        {/*<Route exact path="/AdminPage" component={AdminPage}/>*/}
                        <Route exact path="/wish" component={Wishlist}/>
                        <Route exact path="/welcome" component={Welcome}/>
                        <Route exact path="/nav" component={StaffList}/>
                        <Route exact path="/ViewProduct" component={VkViewProducts}/>

                        <Route exact path="/loginStock" component={loginStore}/>




                        <br/>
                        <Route path="/loginManager" exact component={Navbar1} />
                        <Route path="/loginManager" exact component={ItemsList} />
                        <Route path="/edit/:id" component={EditItem} />
                        <Route path="/user" component={CreateItem} />
                        <Route path="/create" component={CreateCate} />
                        <Route path="/less" component={LessList} />
                        <Route path="/loginManager1" exact component={ItemsList} />

                        <Route exact path="/Loginad" component={LoginFormad}/>
                        <Route exact path="/Registerad" component={RegisterModelad}/>

                        <Route path="/edit1/:id" exact component={EditStaff} />

                        <Route path="/stock" exact component={CreateStaff} />










                    </div>
                </Route>
            </BrowserRouter>
        );
    }
}
export default App;
