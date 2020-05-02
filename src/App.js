import React from 'react';
import logo from './logo.svg';
import './App.css';
import VkViewProducts from "./Components/VK_Components/VK_ViewProducts";
import AsAddProduct from "./Components/AS_Components/AS_AddProduct";
import AsProductList from "./Components/AS_Components/AS_ProductList";
function App() {
  return (
   <div>
     <div className="jumbotron">

     </div>

        <AsAddProduct/>
        <AsProductList/>

   </div>
  );
}

export default App;
