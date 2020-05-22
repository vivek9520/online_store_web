import React, {Component,useEffect,useState} from 'react';
import Axios from "axios";

import ProductCardView from "./ProductCardView";

import AddToCard from "../VK_ProductView/Section/AddToCart"
import './CSS/CardViewList.css'
import axios from "axios";




function CardViewList() {


    const [Products,setProducts] = useState([]);
    const [Skip,setSkip] = useState(0);
    const [Limit,setLimit] = useState(8);
    const [Cart,setCart] = useState([]);

    const [cartStatus,setcartStatus] = useState(true)




    useEffect(()=>{


        getProduct();

        if(Cart.length>0){
            setcartStatus(false)
        }
    },)

    const getProduct = ()=>{
        Axios.get('http://localhost:5000/items/')
            .then(response => {
                setProducts(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }




    const AddToCartAdd =(cartItem)=>{
        let c = cartItem;
        setCart([...Cart,c]);

        alert("Added to Cart");

        console.log(Cart);
    }
        return (


            <div className="row">
                <div className="col-lg-12">
                    <AddToCard
                       Data = {Cart}
                    />

                </div>
                <div className="col-lg-12">
                    <button className= {cartStatus ?"btn-block  cartFalse" :"btn-block  cartTrue" }>Number of Item  :   {Cart.length}</button>
                </div>

                {Products.map(Product =>(
                    <div className="col-lg-3">
                        <ProductCardView productData = {Product} addcart ={AddToCartAdd}></ProductCardView>
                    </div>
                ))}

            </div>
        );

}

export default CardViewList;
