import React, {Component,useEffect,useState} from 'react';
import Axios from "axios";

import WishCard from "./WishCard"

import AddToCard from "../VK_ProductView/Section/AddToCart"
import './CSS/CardViewList.css'
import axios from "axios";




function Wishlist() {


    const [Products,setProducts] = useState([]);
    const [Skip,setSkip] = useState(0);
    const [Limit,setLimit] = useState(8);
    const [Cart,setCart] = useState([]);






    useEffect(()=>{


        getProduct();


    },)

    const getProduct = ()=>{
        Axios.get('http://localhost:5000/wish/')
            .then(response => {
                setProducts(response.data)

            })
            .catch((error) => {

            })
    }

    const  deleteItem = (id)=> {
        axios.delete('http://localhost:5000/wish/'+id)
            .then(res => console.log(res.data));
        setProducts(Products.filter(el => el._id !== id))
        alert("Wish Item Deleted")

    }

    return (


        <div className="row">
            <div>
                <h1>Wish List</h1>
            </div>
            <div className="col-lg-12">

            </div>


            {Products.map((Product) =>(
                <div className="col-lg-3">
                    <WishCard productData = {Product} deleteWish ={()=>deleteItem(Product._id)}></WishCard>
                </div>
            ))}

        </div>
    );

}

export default Wishlist;
