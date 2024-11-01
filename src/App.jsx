import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchaseHistory from "./purchaseHistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css";
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLoginComponent from "./FacebookLoginComponent";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
    
    <GoogleOAuthProvider clientId="146696487188-qv37g528kdar4bjbkhe35evovcobg3f9.apps.googleusercontent.com">
    <GoogleLoginComponent/>
    <FacebookLoginComponent/>
    
    <BrowserRouter>
    
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/veg">Veg</Link>
        <Link to="/nonveg">NonVeg</Link>
        <Link to="/cart">Cart {totalItems }</Link>
        <Link to="/purchasehistory">Purchase History</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
      </nav>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
    </>
  );
}

export default App;
