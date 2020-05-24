import React, {Component, useState} from 'react';
import img from '../Img/1.jpeg'
import './CSS/ProductCard.css'
import {Collapse} from "antd";
import './CSS/GustCard.css'


import {
    Card, CardImg, CardText, CardGroup, CardBody
} from 'reactstrap';
import SingleAddToCart from "./Section/SingleAddToCart";
import ProductDetails from "./ProductDetails";

import StripeCheckout from "react-stripe-checkout";

const {Panel} =Collapse;


class CardForGust extends Component {



    constructor() {
        super();

        this.state={
            count:0
        }
    }








    render() {

        return (
            <section className="tc pa5 pa5-ns wl card1"  height="140"
                     width="300">
                <article className="hide-child relative ba b--black-10 mw5 center">
                    <img
                        src={`/uploads/${this.props.productData.filename}` }
                        className="db" alt={this.props.productData.filename}  height="140"
                        width="180"/>
                    <div className="pa2 bt b--black-20">
                        <b> <a className="f6 db link dark-blue hover-blue" >{this.props.productData.productName}</a>
                        <a className="f6 db link dark-blue hover-blue" >{this.props.productData.size}</a>
                      <p className="f6 gray mv1">Rs/{this.props.productData.price}</p></b>

                    <Collapse defaultActiveKey={['0']}>
                            <Panel  header="View" key="1" style={{ color:"red"}}>
                            <b>    <p>{this.props.productData.productName}</p>
                                <p>{this.props.productData.size}</p>
                                <p>{this.props.productData.price}</p>
                                <p>{this.props.productData.color}</p>
                                <p>{this.props.productData.cateName}</p>
                                <p style={{color:"green"}}><b>- {this.props.productData.discount}</b></p>
                                <p><Collapse defaultActiveKey={['0']}>
                                    <Panel  header="description" key="1" style={{ color:"red" }}>
                                        <p>{this.props.productData.description}</p>

                                    </Panel>
                                </Collapse></p>
                            </b>
                            </Panel>
                        </Collapse>

                    </div>

                </article>
            </section>
        );
    }
}

export default CardForGust;
