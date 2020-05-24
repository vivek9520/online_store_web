import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import pic from './pic.jpeg'

export default class EditItem extends Component {

    constructor(props) {
        super(props);

        this.onChangeCateName = this.onChangeCateName.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProCount = this.onChangeProCount.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDiscount = this.onChangeDiscount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            cateName:'',
            productName: '',
            color:'',
            size:'',
            description: '',
            proCount:0,
            price:0,
            discount: 0,
            date: new Date(),
            cates: [],
            uploaded: {},
            filename:'choose your file',
            file:""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    cateName: response.data.cateName,
                    productName: response.data.productName,
                    color: response.data.color,
                    size: response.data.size,
                    description: response.data.description,
                    proCount: response.data.proCount,
                    price: response.data.price,
                    discount: response.data.discount,
                    date: new Date(response.data.date),
                    filename: response.data.filename,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/cates/')
            .then(response => {
                this.setState({ cates: response.data.map(cate => cate.cateName) });
            })
            .catch((error) => {
                console.log(error);
            })


    }

    onChangeCateName(e) {
        this.setState({
            cateName: e.target.value
        });
    }

    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangeColor(e) {
        this.setState({
            color: e.target.value
        });
    }

    onChangeSize(e) {
        this.setState({
            size: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeProCount(e) {
        this.setState({
            proCount: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeDiscount(e) {
        this.setState({
            discount: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onChange = (e) => {
        this.setState({
            file: e.target.files[0],
            filename: e.target.files[0].name,
        });
    };


    onSubmit(e) {
        e.preventDefault();
        const item = {
            cateName: this.state.cateName,
            productName: this.state.productName,
            color: this.state.color,
            size: this.state.size,
            description: this.state.description,
            proCount: this.state.proCount,
            price: this.state.price,
            discount: this.state.discount,
            date: this.state.date,
            filename: this.state.filename,
        };
        console.log(item);
        window.location = '/loginManager1';

        axios.post('http://localhost:5000/items/update/'+this.props.match.params.id, item)
            .then(res => console.log(res.data));

        const formData = new FormData();
        formData.append("file", this.state.file);

        try {
            const res = axios.post(
                "http://localhost:5000/items/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            const { fileName, filePath } = res.data;

            this.setState({
                uploaded: { fileName, filePath },
            });
        } catch (err) {}


    }


    render() {
        return (
            <body background={pic}>
            <div className={"container"} style={{width:'40.4rem',height:'81rem'}} >
                <br/>
                <div className={"card"}style={{width:'50.4rem',height:'71rem',opacity:0.9}}>
                    <b><i>   <h3 align={"center"}>Edit Item </h3></i></b>
                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                            <div className="form-group">
                                <label>Categories: </label>
                                <select

                                    required
                                    className="form-control"
                                    value={this.state.cateName}
                                    onChange={this.onChangeCateName}>
                                    {
                                        this.state.cates.map(function(cate) {
                                            return <option
                                                key={cate}
                                                value={cate}>{cate}
                                            </option>;
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Product Name: </label>
                                <input  type="text"
                                        placeholder={"Product Name"}
                                        required
                                        className="form-control"
                                        value={this.state.productName}
                                        onChange={this.onChangeProductName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Color: </label>
                                <input  type="text"
                                        placeholder={"Color"}
                                        required
                                        className="form-control"
                                        value={this.state.color}
                                        onChange={this.onChangeColor}
                                />
                            </div>
                            <div className="form-group">
                                <label>Size: </label>
                                <input  type="text"
                                        placeholder={"Size"}
                                        required
                                        className="form-control"
                                        value={this.state.size}
                                        onChange={this.onChangeSize}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description: </label>
                                <div className="form-group">
                <textarea
                    className="form-control"
                    rows="8"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                ></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Quantity: </label>
                                <input
                                    required
                                    type="number"
                                    className="form-control"
                                    value={this.state.proCount}
                                    onChange={this.onChangeProCount}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price: </label>
                                <input
                                    required
                                    type="number"
                                    className="form-control"
                                    value={this.state.price}
                                    onChange={this.onChangePrice}
                                />
                            </div>
                            <div className="form-group">
                                <label>Discount: </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.discount}
                                    onChange={this.onChangeDiscount}
                                />
                            </div>
                            <div className="form-group">
                                <label>Distributed Date: </label>
                                <div>
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                            </div>

                            <div className="custom-file mb-4">
                                <label>add image: </label>
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFile"
                                    onChange={this.onChange}
                                />
                                <label className="customer-file-label" htmlFor="customFile">
                                    {this.state.filename}
                                </label>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Edit Item Log" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </body>
        )
    }
}
