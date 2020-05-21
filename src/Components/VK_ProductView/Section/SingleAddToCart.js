import React, {useState} from "react";
import 'antd/dist/antd.css';
import img from '../../Img/1.jpeg'



function SingleAddToCart(props) {

    return(
        <div>
            <ul className="list pl0 mt0 measure center">
                <li
                    className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                    <img className="w2 h2 w3-ns h3-ns br-100" src={img}/>
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">{props.Data.Title}</span>
                    </div>
                    <div>
                        <a href="tel:" className="f6 link blue hover-dark-gray">{props.Data.Price}</a>
                        <button className="btn btn-danger" style={{padding:"5px" ,margin:"20px"}}>Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default SingleAddToCart;
