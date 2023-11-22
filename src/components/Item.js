import React,{useState} from "react";

function Item({ name, category }) {
  const[isInCart,SetitemClassName]=useState(false);
  const itemClassName = isInCart ? "in-cart" : "" ;

  function handleAddClick(){
    SetitemClassName(isInCart  ?  false : true);
  }
  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddClick}> {isInCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
