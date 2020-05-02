import React, {Component} from 'react';
import ProductList from "./AS_ProductList";

class AsAddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:[],
            itemId:{
                text:'',
                key:''

            },
            itemName:{
                text:'',
                key:''
            },

            itemPrice:{
                text:'',
                key:''
            },

            itemCount:{
                text:'',
                key:''
            },

            itemDeliveryDate:{
                date:'',
                key:''
            },

            itemDiscount:{
                text:'',
                key:''
            }

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputPrice = this.handleInputPrice.bind(this);
        this.handleInputCount = this.handleInputCount.bind(this);
        this.handleInputDeliveryDate=this.handleInputDeliveryDate.bind(this);
        this.handleInputDiscount = this.handleInputDiscount.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    handleInput(e){
        this.setState({
            itemId:{
                text: e.target.value,
                key:Date.now()

            }


        })
    }

    handleInputName(a){
        this.setState({
            itemName:{
                text: a.target.value,
                key:Date.now()

            }
        })
    }

    handleInputPrice(price){
        this.setState({
            itemPrice:{
                text:price.target.value,
                key:Date.now()
            }
        })
    }

    handleInputCount(count){
        this.setState({
            itemCount:{
                text: count.target.value,
                key:Date.now()
            }
        })
    }

    handleInputDeliveryDate(DeliveryDate){
        this.setState({
            itemDeliveryDate:{
                date: DeliveryDate.target.value,
                key:Date.now()
            }
        })
    }

    handleInputDiscount(Discount){
        this.setState({
            itemDiscount:{
                text:Discount.target.value,
                key:Date.now()
            }
        })
    }


    addItem(e){
        e.preventDefault();

        const itemId = this.state.itemId;
        console.log(itemId);

        const itemName = this.state.itemName;
        console.log(itemName);

        const itemPrice = this.state.itemPrice;
        console.log(itemPrice);

        const itemCount = this.state.itemCount;
        console.log(itemCount);

        const DeliveryDate = this.state.itemDeliveryDate;
        console.log(DeliveryDate);

        const itemDiscount = this.state.itemDiscount;
        console.log(itemDiscount);

        if (itemId.text && itemName.text && itemPrice.text && itemCount.text && DeliveryDate.text && itemDiscount.text !==''){
            const newItemList = [...this.state.item,itemId,itemName,itemPrice,itemCount,DeliveryDate,itemDiscount];
            this.setState({
                item:newItemList,
                itemId:{
                    text:'',
                    key:''

                },
                itemName:{
                    text:'',
                    key:''
                },

                itemPrice:{
                    text:'',
                    key:''
                },

                itemCount:{
                    text:'',
                    key:''
                },

                itemDeliveryDate:{
                    date:'',
                    key:''
                },

                itemDiscount:{
                    text:'',
                    key:''
                }

            })
        }


    }


    deleteItem(e){
        e.preventDefault();
        this.setState({
            itemId:{
                text:'',
                key:''
            },
            itemName:{
                text:'',
                key:''
            },

            itemPrice:{
                text:'',
                key:''
            },

            itemCount:{
                text:'',
                key:''
            },
            itemDeliveryDate:{
                date:'',
                key:''
            },
            itemDiscount:{
                text:'',
                key:''
            }

        })
    }


    render()
    {


        return (
            <div>
                <form>
                    <div>
                        <h1>Add Product Deteails</h1>
                        <br></br>
                        Product Id
                        <input type="text" className="form-control" placeholder="Enter Product Id "
                               value={this.state.itemId.text}
                               onChange={this.handleInput}
                        />
                        <br></br>
                        <br></br>
                        Product Name
                        <input type="text" className="form-control" placeholder="Enter Product Name "
                               value={this.state.itemName.text}
                               onChange={this.handleInputName}
                        />
                        <br></br>
                        <br></br>

                        Product Price
                        <input type="text" className="form-control" placeholder="Enter Product Name"
                               value={this.state.itemPrice.text}
                               onChange={this.handleInputPrice}
                        />
                        <br/><br/>

                        Product Count
                        <input type="text" className="form-control" placeholder="Enter Product Count "
                               value={this.state.itemCount.text}
                               onChange={this.handleInputCount}
                        />
                        <br></br>
                        <br></br>
                        Distributed Date
                        <input type="date" className="form-control" placeholder="Enter Distributed Date "
                               value={this.state.itemDeliveryDate.date}
                               onChange={this.handleInputDeliveryDate}
                        />
                        <br></br>
                        <br></br>
                        Discount
                        <input type="text" className="form-control" placeholder="Enter Discount "
                               value={this.state.itemDiscount.text}
                               onChange={this.handleInputDiscount}
                        />
                        <br></br>
                        <br></br>

                        <div>
                            <button type = "submit" onClick ={this.addItem}>ADD</button><br></br><br></br>
                            <button type="submit" onClick={this.deleteItem}>DELETE</button>
                        </div>


                    </div>

                </form>

                {/*<ProductList ProItem = {this.state.item}/>*/}
            </div>
        );

    }
}

export default AsAddProduct;
