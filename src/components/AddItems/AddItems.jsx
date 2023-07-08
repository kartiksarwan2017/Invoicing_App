import "./AddItems.scss";
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemList = ({ items, handleAddItem }) => {
  
  return (

    <>
<div className="add-items">


<h2>Available Items</h2>
    <div className="items-list-container">
   
      {items.map((item) => (
        <Card
          style={{ width: '18rem', backgroundColor: "#fff" }}
          className="mb-2 card"
        >
           <Card.Img className="card-img" variant="top" src={`${item.imgURL}`} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              ${item.price}
            </Card.Text>
            <button onClick={() => handleAddItem(item)} className="addbtn">Add</button>
          </Card.Body>
        </Card>
    ))}
  
    </div>


    
</div>
    </>
  );
};

export default ItemList;
