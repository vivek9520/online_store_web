import React, { Component } from 'react';
import axios from 'axios';
import pic from "./cc.jpeg";


export default class CreateStaff extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirst_namest6 = this.onChangeFirst_namest6.bind(this);
        this.onChangeLast_namest6 = this.onChangeLast_namest6.bind(this);
        this.onChangeEmailst6 = this.onChangeEmailst6.bind(this);
        this.onChangePasswordst6 = this.onChangePasswordst6.bind(this);
        this.onChangePositionst6 = this.onChangePositionst6.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);


        this.state = {
            first_namest6:'',
            last_namest6: '',
            emailst6:'',
            passwordst6:'',
            positionst6: ''
            // uploaded: {},
            // filename:'choose your file',
            // file:""

        }
    }


    onChangeFirst_namest6(e) {
        this.setState({
            first_namest6: e.target.value
        });
    }

    onChangeLast_namest6(e) {
        this.setState({
            last_namest6: e.target.value
        });
    }

    onChangeEmailst6(e) {
        this.setState({
            emailst6: e.target.value
        });
    }

    onChangePasswordst6(e) {
        this.setState({
            passwordst6: e.target.value
        });
    }

    onChangePositionst6(e) {
        this.setState({
            positionst6: e.target.value
        });
    }


    //
    //
    // onChange = (e) => {
    //     this.setState({
    //         file: e.target.files[0],
    //         filename: e.target.files[0].name,
    //     });
    // };


    onSubmit(e) {
        e.preventDefault();
        const Stock = {
            first_namest6: this.state.first_namest6,
            last_namest6: this.state.last_namest6,
            emailst6: this.state.emailst6,
            passwordst6: this.state.passwordst6,
            positionst6: this.state.positionst6
            // filename: this.state.filename,
        };


        axios.post('http://localhost:5000/api/stocks', Stock)
            .then(res => console.log(res.data));

        window.location = "/";

        // const formData = new FormData();
        // formData.append("file", this.state.file);
        //
        // try {
        //     const res = axios.post(
        //         "http://localhost:5000/items/upload",
        //         formData,
        //         {
        //             headers: {
        //                 "Content-Type": "multipart/form-data",
        //             },
        //         }
        //     );
        //
        //     const { fileName, filePath } = res.data;
        //
        //     this.setState({
        //         uploaded: { fileName, filePath },
        //     });
        // } catch (err) {}
    }




    render() {
        return (
            <body background={pic}>
            <div className={"container"} style={{width:'40.4rem',height:'41rem'}} >
                <br/>
                <div className={"row"}>
                    <div className={"col-md-6 mt-5 mx-auto"} >
                        <h1 className={"h3 mb-3 font-weight-normal"} align={"center"}><b><i>ADD STAFF</i></b></h1>
                <form onSubmit={this.onSubmit}>


                    <div className="form-group">
                        <label>First Name: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.first_namest6}
                                onChange={this.onChangeFirst_namest6}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.last_namest6}
                                onChange={this.onChangeLast_namest6}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="email"
                                required
                                className="form-control"
                                value={this.state.emailst6}
                                onChange={this.onChangeEmailst6}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="password"
                                required
                                className="form-control"
                                value={this.state.passwordst6}
                                onChange={this.onChangePasswordst6}
                        />
                    </div>
                    <div className="form-group">
                        <label>Position: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.positionst6}
                                onChange={this.onChangePositionst6}
                        />
                    </div>

                    {/*<div className="custom-file mb-4">*/}
                    {/*    <label>add image: </label>*/}
                    {/*    <input*/}
                    {/*        type="file"*/}
                    {/*        className="custom-file-input"*/}
                    {/*        id="customFile"*/}
                    {/*        onChange={this.onChange}*/}
                    {/*    />*/}
                    {/*    <label className="customer-file-label" htmlFor="customFile">*/}
                    {/*        {this.state.filename}*/}
                    {/*    </label>*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <input type="submit" value="Add Staff" className="btn btn-primary" />
                    </div>
                    <br/>
                </form>
                    </div>
            </div>
            </div>
            </body>
        )
    }
}
