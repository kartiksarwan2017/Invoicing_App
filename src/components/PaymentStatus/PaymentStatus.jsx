import React, { useState } from "react";

const PaymentStatus = () => {
    
  const [paymentStatus, setPaymentStatus] = useState("");

  const handlePaymentStatusUpdate = (status) => {
    setPaymentStatus(status);
  };

  return (
    <div>
      {/* Payment Options */}
      <h3>Payment Options</h3>
      <button onClick={() => handlePaymentStatusUpdate("Paid")}>Paid</button>
      <button onClick={() => handlePaymentStatusUpdate("Unpaid")}>
        Unpaid
      </button>
      <button onClick={() => handlePaymentStatusUpdate("Pending")}>
        Pending
      </button>
      <p>Payment Status: {paymentStatus}</p>
    </div>
  );
};

export default PaymentStatus;
