import React, {useEffect, useState} from "react";
import {Collapse} from "antd";
import 'antd/dist/antd.css';
import SingleAddToCart from "./SingleAddToCart";
import StripeCheckout from "react-stripe-checkout";

const {Panel} =Collapse;





function AddToCart(props) {
    const [Amount,setAmount] = useState(0);

    const CalTotal =()=>{
        let t = 0;


        for (let i = 0 ; i<props.Data.length ; i++){

            t = t+props.Data[i].price;

             setAmount(t)


        }
    }




    useEffect(()=>{

        CalTotal()

    })

    const handleToken =(token,address)=>{

    }




    const  renderCheckboxlist = ()=>props.Data.map((value)=>(
        <React.Fragment>
            <SingleAddToCart Data = {value} handleDelete={()=>props.handleDelete(value._id)} />
        </React.Fragment>
        ))


    return(
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel  header="Add To Cart View" key="1" style={{ color:"red"}}>
                    {renderCheckboxlist()}
                    <h5>Total Price:{Amount}</h5>
                   <StripeCheckout className="btn-block" stripeKey="pk_test_wVIvQLQLIXuy17qSxXrfXyhe00E4CZ7CFv" token={handleToken}></StripeCheckout>

                </Panel>
            </Collapse>
        </div>

    )
}
export default AddToCart;
