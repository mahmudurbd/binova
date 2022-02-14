import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Footer from './components/Home/Home/shared/Footer/Footer';
import Header from './components/Home/Home/shared/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Admin from './components/Admin/Admin';
import AuthProvider from './context/AuthProvider';
import AddProduct from './components/AddProduct/AddProduct';
import Review from './components/Review/Review';
import Booking from './components/Booking/Booking';
import Shoes from './components/Home/Shoes/Shoes';
import ManageOrders from './components/ManageOrders/ManageOrders';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
       <AuthProvider>
      <BrowserRouter>
          <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/exploreshoes" element={<Shoes/>}/>
          <Route path="/booking/:bookingId" element={<RequireAuth><Booking/></RequireAuth>}/>
          <Route path="/addproduct" element={<RequireAuth><AddProduct/></RequireAuth>}/>
          <Route path="/manageorders" element={<RequireAuth><ManageOrders/></RequireAuth>}/>
          <Route path="/admin" element={<RequireAuth><Admin/></RequireAuth>}/>
          <Route path="/payment" element={<RequireAuth><Payment/></RequireAuth>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/review" element={<RequireAuth><Review/></RequireAuth>}/>
        </Routes>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
