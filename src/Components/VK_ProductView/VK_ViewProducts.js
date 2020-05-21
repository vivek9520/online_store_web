import React, {Component} from 'react';
import Header from "../Commen/Header";
import SearchAndFilter from "./SearchAndFilter";
import ExtraBar from "../Commen/Extra_Bar";
import CardViewList from "./CardViewList";
import CheckBox from "./Section/checkbox";



function VkViewProducts(){




        return (
            <div>
                <Header/>
                <ExtraBar/>
                <div className="container">
                    <br/>

                    <CardViewList/>


                </div>
            </div>

        );

}

export default VkViewProducts;
