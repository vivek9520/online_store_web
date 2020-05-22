import React, {Component, useState} from 'react';
import img from '../Img/1.jpeg'
import './CSS/ProductCard.css'


import {
    Card, CardImg, CardText, CardGroup, CardBody
} from 'reactstrap';


class ProductCardView extends Component {



    constructor() {
        super();

        this.state={
            count:0
        }
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
                        <p className="f6 gray mv1">Rs/{this.props.productData.price}</p>
                        <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" style={{color:"white"}} onClick={()=>this.props.addcart(this.props.productData)}>Add to Cart</a>
                    </div>

                </article>
            </section>
        );
    }
}

export default ProductCardView;
