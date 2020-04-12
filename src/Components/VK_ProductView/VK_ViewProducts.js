import React, {Component} from 'react';
import Header from "../Commen/Header";
import SearchAndFilter from "./SearchAndFilter";
import ExtraBar from "../Commen/Extra_Bar";
import CardViewList from "./CardViewList";



class VkViewProducts extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ExtraBar/>
                <div className="container">
                    <SearchAndFilter/>

                    <CardViewList/>
                </div>
            </div>

        );
    }
}

export default VkViewProducts;