import React  from 'react';
import './listItem.css';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item=>{
        return <div className="list" key={item.key}>
            <p>
            <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value, item.key)}}/>
            <span><i className="material-icons" onClick={()=>props.removeItem(item.key)}>delete</i></span>
            </p>
        </div>
    });
    return(
        <div> <FlipMove duratio={500} easing="ease-in-out">{listItems}</FlipMove></div>
    )
}
export default ListItems;