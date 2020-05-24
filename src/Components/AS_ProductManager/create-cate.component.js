import React, { Component } from 'react';
import axios from 'axios';
import pic from './pic.jpeg'


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
            <body background={pic}>
            <div className={"container"} style={{width:'40.4rem',height:'50rem'}} >
                <br/>
                <div className={"card"}style={{width:'50.4rem',height:'15rem',opacity:0.9}}>


                    <b><i><h3 align={"center"}>Create New Categories</h3></i></b>
                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                            <div className="form-group">
                                <label>Categories: </label>
                                <input  type="text"
                                        placeholder={"Categories"}
                                        required
                                        className="form-control"
                                        value={this.state.cateName}
                                        onChange={this.onChangeCateName}
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create Categories" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </body>
        )
    }
}
