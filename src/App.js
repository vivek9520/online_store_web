import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ItemsList from "./components/items-list.component";
import EditItem from "./components/edit-item.component";
import CreateItem from "./components/create-Item.component";
import CreateCate from "./components/create-cate.component";
import LessList from "./components/less-list.component";
import VkViewProducts from "./components/VK_ProductView/VK_ViewProducts";



function App() {
  return (
      <Router>
          <div className="container">
        <Navbar />
        <br/>
        <VkViewProducts/>
        <Route path="/ee" exact component={ItemsList} />
        <Route path="/edit/:id" component={EditItem} />
          <Route path="/user" component={CreateItem} />
              <Route path="/create" component={CreateCate} />
              <Route path="/less" component={LessList} />


          </div>
      </Router>
  );
}

export default App;
