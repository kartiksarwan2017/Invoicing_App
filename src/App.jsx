import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateInvoice from './components/CreateInvoice/CreateInvoice';
import Payment from "./components/Payment/Payment";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";


function App() {

  const netTotal = localStorage.getItem('netTotal');
  const taxRate = localStorage.getItem('taxRate');

  
  const items = [
    { id: 1, name: 'Energize Your Mind', price: 10, imgURL: "https://images.meesho.com/images/products/223757505/haeox_512.jpg" },
    { id: 2, name: 'Shrimad Bhagwad Gita', price: 15, imgURL:"https://m.media-amazon.com/images/I/910v4nQTyZL._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, name: 'Atomic Habits', price: 20, imgURL: "https://5.imimg.com/data5/SELLER/Default/2021/8/US/XL/ZL/133456484/atomic-habits-the-life-changing.jpg" },
    { id: 4, name: `Man's In Search Of Meaning`, price: 20, imgURL: "https://images-na.ssl-images-amazon.com/images/I/71tdb1udZnL._AC_UL600_SR600,600_.jpg" },,
    { id: 5, name: 'Holy Bible', price: 20, imgURL: "https://m.media-amazon.com/images/I/81WRfZhBUEL._AC_UF1000,1000_QL80_.jpg" },
    { id: 5, name: 'Quran', price: 20, imgURL: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVyYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" },
    { id: 5, name: 'Gautam buddha', price: 20, imgURL: "https://m.media-amazon.com/images/I/51uBeD-iAfL._AC_UF1000,1000_QL80_.jpg" },

  ];


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
