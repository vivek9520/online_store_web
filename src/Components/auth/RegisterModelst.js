import React, { Component } from 'react';
import axios from 'axios'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert,
    Col

} from 'reactstrap';
import pic from "./zz.jpeg";




export class RegisterModalst extends Component {

    state = {
        stocks:[],
        newStockData:{
            first_namest6:"",
            last_namest6:"",
            emailst6:"",
            passwordst6:"",
            positionst6:""
        }

    };
    addStock(){
        axios.post('http://localhost:5000/api/stocks',this.state.newStockData).then((response)=>{
            let { stocks } = this.state;
            stocks.push(response.data);
            alert("Staff registered successfully");
            window.location = '/loginst';
            this.setState({stocks , newStockModel: false, newStockData:{


                    first_namest6:"",
                    last_namest6:"",
                    emailst6:"",
                    passwordst6:"",
                    positionst6:""


                }});


        })
            .catch((err) => {
                alert("Please Fill All Fields!!! ")
            })

        // window.location='/login'
    }
    render() {
        return (

            <body background={pic}>
            <div className={"container"} style={{width:'40.4rem',height:'41rem'}} >
                <br/>
                <div className={"row"}>
                    <div className={"col-md-6 mt-5 mx-auto"}>
            <div className={"form-group"}>
                <h3 align={"center"}><b><i>REGISTER</i></b></h3>

                <FormGroup>

                    <Label for="username">First Name</Label>
                    <Input username="username" required className={"form-control"} placeholder={"Enter your First Name"}  value={this.state.newStockData.first_namest6} onChange={(e) => {
                        let { newStockData } = this.state;

                        newStockData.first_namest6 = e.target.value;

                        this.setState({ newStockData });
                    }} />

                </FormGroup>

                <FormGroup>

                    <Label for="username">Last Name</Label>
                    <Input username="username" required className={"form-control"} placeholder={"Enter your Last Name"} value={this.state.newStockData.last_namest6} onChange={(e) => {
                        let { newStockData } = this.state;

                        newStockData.last_namest6 = e.target.value;

                        this.setState({ newStockData });
                    }} />

                </FormGroup>

                <FormGroup>

                    <Label for="email"> Email</Label>
                    <Input type="email" required className={"form-control"} id="email" placeholder={"Enter Email"}  value={this.state.newStockData.emailst6} onChange={(e) => {
                        let { newStockData } = this.state;

                        newStockData.emailst6 = e.target.value;

                        this.setState({ newStockData });
                    }} />

                </FormGroup>
                <FormGroup>

                    <Label for="password"> Password</Label>
                    <Input type="password"  className={"form-control"}
                           title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                           required placeholder={"Enter Password"} pattern="^(?=.\d)(?=.[a-z])(?=.[A-Z])(?!.\s).*$" id="password" value={this.state.newStockData.passwordst6} onChange={(e) => {
                        let { newStockData } = this.state;

                        newStockData.passwordst6 = e.target.value;

                        this.setState({ newStockData });
                    }} />

                </FormGroup>

                <FormGroup>

                    <Label for="position">Position</Label>
                    <Input username="position" required className={"form-control"} placeholder={"Enter your Position"}  value={this.state.newStockData.positionst6} onChange={(e) => {
                        let { newStockData } = this.state;

                        newStockData.positionst6 = e.target.value;

                        this.setState({ newStockData });
                    }} />

                </FormGroup>
                {/* <FormGroup>
                              <Label for="user_status"> Status </Label>
                              <Input type="text" id="user_status" defaultValue="active"
                              readOnly onChange={(e) => {
                                let { newUserData } = this.state;

                                newUserData.user_status = e.target.value;

                                this.setState({ newUserData });     </div>
                              }} />

                </FormGroup>   */}
                <div className="later">
                    <FormGroup>
                        <Col smOffset={1} sm={12}>
                            <Button class="btn btn-primary" color="primary" align="center" onClick={this.addStock.bind(this)}>Register</Button>{' '}
                        </Col> </FormGroup> <br/> </div> </div>
                    </div>
                </div>
            </div>
            </body>
        );
    }
}


export default RegisterModalst;
