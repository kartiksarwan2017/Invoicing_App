// // import React, { useState, useEffect } from 'react';
// // import itemsData from '../../items.json';

// // const CreateInvoice = () => {
// //   const [items, setItems] = useState([]);
// //   const [selectedItems, setSelectedItems] = useState([]);
// //   const [netTotal, setNetTotal] = useState(0);

// //   useEffect(() => {
// //     setItems(itemsData);
// //   }, []);

// //   const handleAddItem = (itemId) => {
// //     const selectedItem = items.find((item) => item.id === itemId);
// //     setSelectedItems([...selectedItems, selectedItem]);
// //   };

// //   useEffect(() => {
// //     const calculateNetTotal = () => {
// //       const total = selectedItems.reduce((acc, item) => acc + item.price, 0);
// //       setNetTotal(total);
// //     };

// //     calculateNetTotal();
// //   }, [selectedItems]);

// //   return (
// //     <div>
// //       <h2>New Invoice</h2>
// //       <ul>
// //         {items.map((item) => (
// //           <li key={item.id}>
// //             {item.name} - ${item.price}{' '}
// //             <button onClick={() => handleAddItem(item.id)}>Add</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h3>Selected Items:</h3>
// //       <ul>
// //         {selectedItems.map((item) => (
// //           <li key={item.id}>
// //             {item.name} - ${item.price}
// //           </li>
// //         ))}
// //       </ul>
// //       <p>Net Total: ${netTotal}</p>
// //     </div>
// //   );
// // };

// // export default CreateInvoice;




// CreateInvoice.js

import React, { useEffect, useState } from 'react';
import ItemList from '../AddItems/AddItems';
import Payment from "../Payment/Payment";
import { Link } from 'react-router-dom';
import SelectedList from "../SelectedList";
import "./CreateInvoice.scss";

const CreateInvoice = () => {
  const [customerName, setCustomerName] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [netTotal, setNetTotal] = useState(0);
  const [taxRate] = useState(0.18); // Tax rate of 18%
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);



  useEffect(() => {
    localStorage.setItem('netTotal', netTotal)
    localStorage.setItem('taxRate', taxRate)
  }, [netTotal, taxRate]);



  const items = [
    { id: 1, name: 'Energize Your Mind', price: 10, imgURL: "https://images.meesho.com/images/products/223757505/haeox_512.jpg" },
    { id: 2, name: 'Shrimad Bhagwad Gita', price: 15, imgURL:"https://m.media-amazon.com/images/I/910v4nQTyZL._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, name: 'Atomic Habits', price: 20, imgURL: "https://5.imimg.com/data5/SELLER/Default/2021/8/US/XL/ZL/133456484/atomic-habits-the-life-changing.jpg" },
    { id: 4, name: `Man's In Search Of Meaning`, price: 20, imgURL: "https://images-na.ssl-images-amazon.com/images/I/71tdb1udZnL._AC_UL600_SR600,600_.jpg" },,
    { id: 5, name: 'Holy Bible', price: 20, imgURL: "https://m.media-amazon.com/images/I/81WRfZhBUEL._AC_UF1000,1000_QL80_.jpg" },
    { id: 5, name: 'Quran', price: 20, imgURL: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVyYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" },
    { id: 5, name: 'Gautam buddha', price: 20, imgURL: "https://m.media-amazon.com/images/I/51uBeD-iAfL._AC_UF1000,1000_QL80_.jpg" },

  ];

  const handleAddItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setNetTotal(netTotal + item.price);
  };

  const handleDiscountChange = (e) => {
    setDiscount(parseFloat(e.target.value));
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyDiscount = (amount) => {
    return amount - discount;
  };

  const applyTax = (amount) => {
    return amount * (1 + taxRate);
  };

  const applyCouponCode = (amount) => {
    // Apply coupon code logic here
    // You can define coupon codes and their corresponding discounts in an object or fetch them from an API
    const couponCodes = {
      CODE1: 0.1, // 10% discount
      CODE2: 0.2, // 20% discount
      // Add more coupon codes here
    };
    const couponDiscount = couponCodes[couponCode.toUpperCase()] || 0;
    return amount - amount * couponDiscount;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const totalBeforeTax = applyDiscount(netTotal);
    const totalAfterTax = applyTax(totalBeforeTax);
    const totalAfterCoupon = applyCouponCode(totalAfterTax);
    setTotalAmount(totalAfterCoupon);
  };

  return (
    <div>
      <h2>Create a New Invoice</h2>
      <form onSubmit={handleSubmit}>
        {/* Customer details and invoice form fields */}
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Invoice Date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
        />
        <textarea
          placeholder="Additional Information"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />

        {/* Selected items */}

        <SelectedList selectedItems={selectedItems} />

        {/* Available items */}

        <ItemList items={items} handleAddItem={handleAddItem} />

        <div className='invoice-payment'>
          {/* Net Total */}
          <p>Net Total: ${netTotal}</p>

          {/* Discount */}
          <input
            type="number"
            placeholder="Discount"
            value={discount}
            onChange={handleDiscountChange}
          />

          {/* Coupon Code */}

          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={handleCouponCodeChange}
          />

          {/* Total Amount */}
          <p>Total Amount: ${totalAmount}</p>

          {/* Submit button */}
          <button type="submit">Create Invoice</button>

          <Link to="/payment">
        <button>Proceed to Payment</button>
      </Link>
        </div>
      </form>

   
    </div>
  );
};

export default CreateInvoice;






