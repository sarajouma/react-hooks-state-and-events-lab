import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 
  const[shoppingItems,setShoppingitems] = useState(items);  

  function handleFilterChange(event) {
    const itemsToDisplay =items.filter((item) => {
      if (event.target.value === "All") {
        return item;
      } else {
        return item.category === event.target.value;
      }
    });
    setShoppingitems(itemsToDisplay);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {shoppingItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
