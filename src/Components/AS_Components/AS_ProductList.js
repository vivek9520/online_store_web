import React from "react";
import {render} from "react-dom";


function ProductList(props) {

    // const itemDetails = props.ProItem;
    // const productList = itemDetails.map(Pro =>
    //     {
    //         return <div className="list" key={Pro.key}>
    //             <p>{itemDetails.text}</p>
    //         </div>
    //     }
    // )
    return (
        <div>
            {/*{productList}*/}
            <div>
                <table>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Count</th>
                        <th>Distributed Date</th>
                        <th>Discount</th>
                    </tr>

                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td><button type="submit" >EDIT</button></td>
                        <td><button type="submit">DELETE</button></td>
                    </tr>



                </table>



            </div>
        </div>
    );
}
export default ProductList;
