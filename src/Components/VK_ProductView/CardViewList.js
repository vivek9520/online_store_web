import React, {Component} from 'react';
import ProductCardView from "./ProductCardView";
const dresses =[{Title:"Male", ItemID:"001"},
              {Title:"female",ItemID:"002"},
              {Title:"Kids",ItemID:"003"},
              {Title:"Kids",ItemID:"003"},
              {Title:"Male",ItemID:"004"}];
const check =[1,2,3,4];
class CardViewList extends Component {
    render() {
        return (
            dresses.map((dress)=>{
                    return(
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <ProductCardView ds/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ProductCardView/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ProductCardView/>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ProductCardView/>
                            </div>

                        </div>
                    );
            })



        );
    }
}

export default CardViewList;