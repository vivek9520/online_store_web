import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
    <tr>
        <td>{props.item.cateName}</td>
        <td>{props.item.productName}</td>
        <td>{props.item.color}</td>
        <td>{props.item.size}</td>
        <td>{props.item.description}</td>
        <td>{props.item.proCount}</td>
        <td>{props.item.price}</td>
        <td>{props.item.discount}</td>
        <td>{props.item.date.substring(0,10)}</td>
        <td>
            <img
                src={`/uploads/${props.item.filename}`}
                height="180"
                width="180"
            />
        </td>


        <td>
            <a href="#" onClick={() => { props.emailItem(props.item._id) } }>send</a>
        </td>



    </tr>
)

export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {items: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/')
            .then(response => {
                this.setState({ items: response.data.filter(el =>50 > el.proCount ) });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    emailItem(id) {
        axios.post('http://localhost:5000/items/email'+id)
            .then(res => alert(res.data));

    }


    itemList() {
        return this.state.items.map(currentitem => {
            return <Item item={currentitem} emailItem={this.emailItem} key={currentitem.proCount}/>;
        })
    }



    render() {
        return (
            <div>
                <h3>List Items</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Categories</th>
                        <th>Product name</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Distributed Date</th>
                        <th>Image</th>
                        <th>Send Email</th>

                    </tr>
                    </thead>
                    <tbody>
                    { this.itemList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

