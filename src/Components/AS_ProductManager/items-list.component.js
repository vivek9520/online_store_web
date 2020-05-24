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
            <Link to={"/edit/"+props.item._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>delete</a>
        </td>
    </tr>
)

export default class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {items: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    dologout(){
        localStorage.clear()

        window.location='/'


    }

    deleteItem(id) {
        axios.delete('http://localhost:5000/items/'+id)
            .then(res => console.log(res.data));
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
    }

    itemList() {
        return this.state.items.map(currentitem => {
            return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem._id}/>;
        })
    }

    render() {
        return (
            <div>
                <div>
                    <a  className="d-inline p-2 text-dark" onClick={this.dologout}>LOGOUT</a>
                </div>
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
                        <th>Actions</th>
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
