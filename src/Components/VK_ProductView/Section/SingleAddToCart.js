import React, {useState} from "react";
import 'antd/dist/antd.css';
import img from '../../Img/1.jpeg'
import {Input} from "antd";
import axios from "axios";



function SingleAddToCart(props) {
    const {buttonState,setbuttonState} = useState(true)
    const update=(id)=>{

        const item = {
            cateName: props.Data.cateName,
            productName: props.Data.productName,
            color: props.Data.color,
            size: props.Data.size,
            description: props.Data.description,
            proCount: props.Data.proCount -1,
            price: props.Data.price,
            discount: props.Data.discount,
            date: props.Data.date,
            filename: props.Data.filename,
        };
        console.log(item);


        axios.post('http://localhost:5000/items/update/'+id, item)
            .then(res => console.log(res.data));

        alert("Confirmed Product.")
    }

   const changeButtonState =()=>{
        setbuttonState(true)
    }
    return(
        <div>
            <ul className="list pl0 mt0 measure center btn-block">
                <li
                    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                    <img className="w2 h2 w3-ns h3-ns br-100" src={`/uploads/${props.Data.filename}` }/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">{props.Data.productName}</span>
                        <div>
                            <a href="tel:" className="f6 link blue hover-dark-gray">{props.Data.size}</a>
                        </div>
                    </div>

                    <div>
                        <a href="tel:" className="f6 link blue hover-dark-gray">{props.Data.price}</a>

                        <button className=" btn-danger" style={{margin:"20px"}} onClick={props.handleDelete}>Delete</button>
                        <button onClick={()=>update(props.Data._id)} className={buttonState ? "btn-danger":"btn-info"}>Confirm</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default SingleAddToCart;
