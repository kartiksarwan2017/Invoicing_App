import "./Header.scss";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {


  const navigate = useNavigate();
  
  const handleLogOut = () => {
    localStorage.removeItem('username');
    navigate('/login');
  }


  return (
    <div className='header-container'>
      <Navbar>
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt="invoice"
              src="./bill.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <h1>Invoicing App</h1>
          </Navbar.Brand>

          
          {
              localStorage.getItem("username") !== null &&      
              <button className='logoutBtn' onClick={handleLogOut}>Logout</button> 
          }


          {
              localStorage.getItem("username") === null &&
              <div className='nav-btn-container'>
              <button className='nav-btn'><Link to="/login">Login</Link></button>
              <button className='nav-btn'><Link to="/register">Sign Up</Link></button>
              </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;