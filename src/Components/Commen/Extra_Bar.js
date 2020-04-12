import React, {Component} from 'react';
import '../VK_ProductView/CSS/ExtraBar.css'



class ExtraBar extends Component {

    render() {

        return (
            <div className=" nav1">
                <div className="row">
                <div className="col-lg-1 signup">sign up</div>
                <div className="col-lg-10">
                    <marquee>
                        <h6 className="marquee_text" >
                                Sometimes the scent of seasonal hand wash is all we need to rouse our holiday spirits. Available in an array of festive fragrances, our naturally derived gel hand wash will leave your hands soft, clean and ready to be tucked into a pair of fair isle mittens. It really is the most wonderful time of the year
                        </h6>
                    </marquee>
                </div>
                <div className="col-lg-1 login">Login</div>

            </div>
            </div>

        );
    }
}

export default ExtraBar;