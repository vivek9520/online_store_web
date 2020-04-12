import React, {Component} from 'react';
import './CSS/FilterAndSerach.css';

class SearchAndFilter extends Component {
    render() {
        return (
            <div>
                <div className="card card-body my-3">
                    <form>
                        <div className="input-group">

                            <input type="text" className="form-control" placeholder="Enter the Task "   required/>
                        </div>
                        <button className= "btn btn-block  mt-3 btnNew">Search</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default SearchAndFilter;