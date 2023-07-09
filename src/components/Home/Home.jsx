import "./Home.scss";
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className='home-container'>
      <Link to="/new-invoice">New Invoice</Link>
    </div>
    
  )
}

export default Home;