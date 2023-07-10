import React from 'react';
import "./SelectedItems.scss";

const SelectedList = ({selectedItems}) => {

  localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

  return (
    <div className='selectedItems'>

       <h3>Selected Items</h3>
        <ul>
          
          {selectedItems.map((item) => (
            
            <li key={item.id} className='lists'>
              <img src={`${item.imgURL}`} />
             
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default SelectedList;