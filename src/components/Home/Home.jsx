import "./Home.scss";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('username');
    navigate('/login');
  }

  return (
    <div className='home-container'>
      <button onClick={handleLogOut}>Logout</button>
      <Link to="/new-invoice">New Invoice</Link>
    </div>
    
  )
}

export default Home;