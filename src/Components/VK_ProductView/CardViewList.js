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
            <div className="row">
                {dresses.map(dress =>(
                    <div className="col-lg-3">
                        <ProductCardView></ProductCardView>
                    </div>
                ))}
            </div>
        );
    }
}

export default CardViewList;
