import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCate extends Component {

    constructor(props) {
        super(props);
        this.onChangeCateName = this.onChangeCateName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            cateName: ''
        };
    }

    onChangeCateName(e) {
        this.setState({
            cateName: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newCate = {
            cateName: this.state.cateName,
        };
        console.log(newCate);

        axios.post('http://localhost:5000/cates/add', newCate)
            .then(res => alert(res.data) )//console.log(res.data));

        this.setState({
            cateName: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Categories</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Categories: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.cateName}
                                onChange={this.onChangeCateName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Categories" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
