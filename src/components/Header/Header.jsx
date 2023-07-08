import "./Header.scss";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
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
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;