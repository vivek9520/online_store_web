import React, {Component, useState} from 'react';
import img from '../Img/1.jpeg'
import './CSS/ProductCard.css'
import ProductDetails from "./ProductDetails";


import {
    Card, CardImg, CardText, CardGroup, CardBody
} from 'reactstrap';
import axios from "axios";


class ProductCardView extends Component {



    constructor() {
        super();

        this.state={
            count:0
        }
    }

    update(id){

        const item = {
            cateName: this.props.productData.cateName,
            productName: this.props.productData.productName,
            color: this.props.productData.color,
            size: this.props.productData.size,
            description: this.props.productData.description,
            proCount: this.props.productData.proCount+1,
            price: this.props.productData.price,
            discount: this.props.productData.discount,
            date: this.props.productData.date,
            filename: this.props.productData.filename,
        };
        console.log(item);


        axios.post('http://localhost:5000/items/update/'+id, item)
            .then(res => console.log(res.data));


    }
    
    viewDetails(data){

            console.log(data)

    }


    render() {

        return (
            <section className="tc pa5 pa5-ns wl"  height="140"
                     width="180">
                <article className="hide-child relative ba b--black-10 mw5 center">
                    <img
                        src={`/uploads/${this.props.productData.filename}` }
                        className="db" alt={this.props.productData.filename}  height="140"
                        width="180"/>
                    <div className="pa2 bt b--black-20">
                        <a className="f6 db link dark-blue hover-blue" >{this.props.productData.productName}</a>
                        <a className="f6 db link dark-blue hover-blue" >{this.props.productData.size}</a>

                        <p className="f6 gray mv1">Rs/{this.props.productData.price}</p>
                        <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" style={{color:"white" ,margin:"2px" }} onClick={()=>this.viewDetails(this.props.productData)}>View</a>
                        <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" style={{color:"white" ,margin:"2px"}} onClick={()=>this.props.addcart(this.props.productData)}>Add  Cart</a>
                        <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" style={{color:"white" ,margin:"2px" }} onClick={()=>this.props.addtoWish(this.props.productData)}>Add  Wish</a>


                    </div>

                </article>
            </section>
        );
    }
}

export default ProductCardView;
