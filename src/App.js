import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/AS_ProductManager/navbar.component"
import ItemsList from "./components/AS_ProductManager/items-list.component";
import EditItem from "./components/AS_ProductManager/edit-item.component";
import CreateItem from "./components/AS_ProductManager/create-Item.component";
import CreateCate from "./components/AS_ProductManager/create-cate.component";
import LessList from "./components/AS_ProductManager/less-list.component";
import VkViewProducts from "./components/VK_ProductView/VK_ViewProducts";
import Wishlist from "./components/VK_ProductView/Wishlist"
import Header from "./components/Commen/Header";
import ExtraBar from "./components/Commen/Extra_Bar";



function App() {
  return (
      <Router>
          <Header/>
          <ExtraBar/>
        <Route path="/wish" exact component={Wishlist} />
        <Route path="/edit/:id" component={EditItem} />
        <Route path="/user" component={CreateItem} />
        <Route path="/create" component={CreateCate} />
        <Route path="/less" component={LessList} />
          <Route path="/viewProduct" component={VkViewProducts} />



      </Router>
  );
}

export default App;
