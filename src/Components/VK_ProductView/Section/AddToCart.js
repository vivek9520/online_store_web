import React, {useEffect, useState} from "react";
import {Checkbox,Collapse} from "antd";
import 'antd/dist/antd.css';
import SingleAddToCart from "./SingleAddToCart";

const {Panel} =Collapse;





function AddToCart(props) {
    const [Amount,setAmount] = useState(0);

    const CalTotal =()=>{
        let t = 0;


        for (let i = 0 ; i<props.Data.length ; i++){

            t = t+props.Data[i].Price;

             setAmount(t)

            console.log(Amount);

        }
    }

   const deleteFunction =(id)=>{
       this.setState(prevState => ({
           data: prevState.Data.filter(el => el != id )
       }));
    }


    useEffect(()=>{

        CalTotal()

    })



    const  renderCheckboxlist = ()=>props.Data.map((value)=>(
        <React.Fragment>
            <SingleAddToCart Data = {value}/>
        </React.Fragment>
        ))


    return(
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel  header="Add To Cart View" key="1" style={{ color:"red"}}>
                    {renderCheckboxlist()}
                    <h5>Total Price:{Amount}</h5>
                    <button className="btn-block">Pay</button><br/>
                    <button className="btn-block">Save</button>

                </Panel>
            </Collapse>
        </div>

    )
}
export default AddToCart;
