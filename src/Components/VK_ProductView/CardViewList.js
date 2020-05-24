import React, {Component,useEffect,useState} from 'react';
import Axios from "axios";

import ProductCardView from "./ProductCardView";

import AddToCard from "../VK_ProductView/Section/AddToCart"
import './CSS/CardViewList.css'
import axios from "axios";
import {Link} from 'react-router-dom'
import CardForGust from "./CardForGust";
import ExtraBar from "../Commen/Extra_Bar";




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

            })
            .catch((error) => {

            })
    }
    const handlerDelete = (id)=>{

        const  filteredItems = Cart.filter(item => item._id !== id)
        setCart(filteredItems)
        alert("deleted")

    }

   const addtoWish =(item)=>{
        console.log(item)

       const wishitem = {
           cateName: item.cateName,
           productName: item.productName,
           color: item.color,
           size: item.size,
           description: item.description,
           proCount: item.proCount,
           price: item.price,
           discount: item.discount,
           date: item.date,
           filename: item.filename,
       };


       axios.post('http://localhost:5000/wish/add', wishitem)
           .then(res => console.log(res.data));
   }


    const AddToCartAdd =(cartItem)=>{
        let c = cartItem;
        setCart([...Cart,c]);

        alert("Added to Cart");

    }

    const checkAuth=()=>{
        const token = localStorage.getItem('token');


        if (token===null){
            return false
        }
        else {
            return true
        }
    }


        return (
           <> <div className="col-lg-12 nav1" > <ExtraBar/></div>

            <div className="row">


                <div className="col-lg-12">
                    <AddToCard
                       Data = {Cart}
                       handleDelete={handlerDelete}
                    />

                </div>
                <div className="col-lg-12">
                    <button className= {cartStatus ?"btn-block  cartFalse" :"btn-block  cartTrue" }>Number of Item  :   {Cart.length}</button>
                    <Link to="/wish"> <button className="btn-block" >Show Wish List</button></Link>
                </div>
                {checkAuth() ? <>
                    {Products.map((Product) =>(
                        <div className="col-lg-3">
                            <ProductCardView productData = {Product} addcart ={AddToCartAdd} key={Product._id} addtoWish ={addtoWish}></ProductCardView>
                        </div>
                    ))}
                </>:<>{Products.map((Product) =>(
                    <div className="col-lg-3">
                        <CardForGust productData = {Product} ></CardForGust>
                    </div>
                ))}</>}


            </div>
               </>
        );

}

export default CardViewList;
