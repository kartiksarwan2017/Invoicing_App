import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import "./Payment.css";

const Payment = ({ cartItems, totalAmount }) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    document.querySelector('.card-number-input').oninput = () => {
        document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
    }

    document.querySelector('.card-holder-input').oninput = () => {
        document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
    }

    document.querySelector('.month-input').oninput = () => {
        document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
    }

    document.querySelector('.year-input').oninput = () => {
        document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
    }

    document.querySelector('.cvv-input').onmouseenter = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    }

    document.querySelector('.cvv-input').onmouseleave = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    }

    document.querySelector('.cvv-input').oninput = () => {
        document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
    }
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentStatus('Payment Successful');

    Swal.fire({
        title: `Payment Successful`,
        icon: 'success',
        showCloseButton: true,
        timer: 1000
    });

    setTimeout(() => {
   
      window.location = "/payment-status";	 
  
    }, 1000);


  };


  return (
    <>
      <div className="payment-container">

<div className="card-container">

    <div className="front">
        <div className="image">
            <img src="./chip.png" alt="chip.png" />
            <img src="./visa.png" alt="visa.png" />
        </div>
        <div className="card-number-box">################</div>
        <div className="flexbox">
            <div className="box">
                <span>CARD HOLDER</span>
                <div className="card-holder-name">FULL NAME</div>
            </div>
            <div className="box">
                <span>EXPIRES</span>
                <div className="expiration">
                    <span className="exp-month">MM</span>
                    <span className="exp-year">YY</span>
                </div>
            </div>
        </div>
    </div>

    <div className="back">
        <div className="stripe"></div>
        <div className="box">
            <span>cvv</span>
            <div className="cvv-box"></div>
            <img src="./visa.png" alt="" />
        </div>
    </div>

</div>

<form action="" className="form" onSubmit={(e) => handlePayment(e)}>
    <div className="inputBox">
        <span className="label">card number</span>
        <input 
            type="text" 
            maxlength="16"
            className="card-number-input"      
            placeholder="Credit Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
        />
    </div>
    <div className="inputBox">
        <span className="label">card holder</span>
        <input 
            type="text" 
            className="card-holder-input"
            placeholder="Card Holder Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
        />
    </div>
    <div className="flexbox">
        <div className="inputBox">
            <span>expiration mm</span>
            <select name="" id="" className="month-input" value={expirationMonth} onChange={(e) => setExpirationMonth(e.target.value)}  required>
                <option value="month" selected disabled>month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </div>
        <div className="inputBox">
            <span>expiration yy</span>
            <select name="" id="" className="year-input" value={expirationYear} onChange={(e) => setExpirationYear(e.target.value)}  required> 
                <option value="year" selected disabled>year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
            </select>
        </div>
        <div className="inputBox">
            <span>cvv</span>
            <input type="text" maxLength="4" className="cvv-input" required />
        </div>
    </div>
    <button className="submit-btn">SUBMIT</button>
</form>

</div>
    </>
  );
};

export default Payment;
