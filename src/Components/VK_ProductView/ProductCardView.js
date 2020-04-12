import React, {Component} from 'react';
import img from '../Img/1.jpeg'
import './CSS/ProductCard.css'

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';


class ProductCardView extends Component {

    render() {

        return (


            <CardGroup className="cardstyle">
                    <Card >
                        <CardImg className= "image" top width="100%" src={img} alt="Card image cap" />
                        <CardBody>

                            <CardText className="ItemCode">Item Code:</CardText>

                        </CardBody>
                    <foot className="card-footer footerText">Price:1200$  <span className="addtocard">+</span></foot>

                    </Card>
            </CardGroup>


        );
    }
}

export default ProductCardView;