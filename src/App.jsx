import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateInvoice from './components/CreateInvoice/CreateInvoice';
import Payment from "./components/Payment/Payment";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";
import { useState } from 'react';


function App() {

  const [netTotal, setNetTotal] = useState(localStorage.getItem('netTotal'));
  const taxRate = localStorage.getItem('taxRate');


  return (
    <div className="App">

      <Header />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/new-invoice" element={<CreateInvoice />} />
          <Route exact path="/payment" element={<Payment netTotal={netTotal} taxRate={taxRate} />} />
          <Route exact path="/payment-status" element={<PaymentStatus />} />
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
