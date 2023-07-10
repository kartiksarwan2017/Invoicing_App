import "./Home.scss";
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className='home-container'>
      <button className="newInvoiceBtn">
      <Link to="/new-invoice">New Invoice</Link>
      </button>
    </div>
    
  )
}

export default Home;