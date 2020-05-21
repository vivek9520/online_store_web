import React, {useState} from "react";
import {Checkbox,Collapse} from "antd";
import 'antd/dist/antd.css';

const {Panel} =Collapse;


const continent =[
    {
        _id :1,
        name:"Boys"
    },
    {
        _id :2,
        name:"Girls"
    },
    {
        _id :3,
        name:"Kids"
    },
    {
        _id :4,
        name:"Wedding"
    },
]

function CheckBox(props) {

    const [checked,setchecked] = useState([]);

    const handleToggle = (value) => {

        const  currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1){
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex,1);
        }

        setchecked(newChecked);

        props.handleFilters(newChecked);

    }

    const  renderCheckboxlist = ()=>continent.map((value,index)=>(
        <React.Fragment key ={index}>
            <Checkbox
                onChange={()=>handleToggle(value._id)}
                type="checkbox"
                checked={checked.indexOf(value._id) === -1 ? false:true}
            />
            <span>{value.name}</span>
        </React.Fragment>
    ))


    return(
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel  header="Filter" key="1">
                    {renderCheckboxlist()}
                </Panel>
            </Collapse>
        </div>
    )
}
export default CheckBox;
