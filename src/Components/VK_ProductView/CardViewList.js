import React, {Component,useEffect,useState} from 'react';
import Axios from "axios";

import ProductCardView from "./ProductCardView";
import CheckBox from "./Section/checkbox";
import AddToCard from "../VK_ProductView/Section/AddToCart"
import './CSS/CardViewList.css'




function CardViewList() {


    const [Products,setProducts] = useState([]);
    const [Skip,setSkip] = useState(0);
    const [Limit,setLimit] = useState(8);
    const [Cart,setCart] = useState([]);

    const [cartStatus,setcartStatus] = useState(true)




        useEffect(()=>{
            const variable ={
                skip: Skip,
                limit: Limit
            }

            getProduct(variable);

            if(Cart.length>0){
                setcartStatus(false)
            }
        },)

    const getProduct = (variable)=>{
        Axios.post('http://localhost:3001/api/getAllProducts',variable)
            .then(response =>{
                if (response.data.success){
                    setProducts(response.data.items)

                }
                else{
                    alert("Data fetching failed");
                }
            })
    }

    const onLoadMore =() =>{
        let skip = Skip +Limit;
        const variable ={
            skip: skip,
            limit: Limit
        }

        getProduct(variable);

    }

    const changeLimit =()=>{
            setLimit(16);
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
                <div className="col-lg-12">
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <button onClick={() =>{onLoadMore(); changeLimit()}}>Load More</button>
                    </div>
                </div>
            </div>
        );

}

export default CardViewList;
