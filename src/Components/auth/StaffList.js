import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navb from './../Navbar'

const Stock = props => (
    <tr>
        <td>{props.stock.first_namest6}</td>
        <td>{props.stock.last_namest6}</td>
        <td>{props.stock.emailst6}</td>
        <td>{props.stock.positionst6}</td>
        {/*<td>*/}
        {/*    <img*/}
        {/*        src={`/uploads/${props.item.filename}`}*/}
        {/*        height="180"*/}
        {/*        width="180"*/}
        {/*    />*/}
        {/*</td>*/}
        <td>
            <Link to={"/edit1/"+props.stock._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStaff(props.stock._id) }}>delete</a>
        </td>
    </tr>
)

export default class StaffList extends Component {
    constructor(props) {
        super(props);
        this.deleteStaff = this.deleteStaff.bind(this);
        this.state = {stock: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/stocks/retrieve')
            .then(response => {
                this.setState({ stock: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteStaff(id) {
        axios.delete('http://localhost:5000/api/stocks/'+id)
            .then(res => console.log(res.data));
        this.setState({
            stock: this.state.stock.filter(el => el._id !== id)
        })
    }

    StaffList() {
        return this.state.stock.map(currentstock => {
            return <Stock stock={currentstock} deleteStaff={this.deleteStaff} key={currentstock._id}/>;
        })
    }

    dologout(){
        localStorage.clear()

        window.location='/'


    }

    render() {
        return (
            <div>
                <Navb/>
                <div>
                    <a  className="d-inline p-2 text-dark" onClick={this.dologout}>LOGOUT</a>
                </div>
                <h3>Staff List</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>FirstName</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        {/*<th>Image</th>*/}
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.StaffList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
