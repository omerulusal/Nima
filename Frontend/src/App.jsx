import Header from "./layout/Header"
import Footer from "./layout/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import ForgotPassword from "./pages/ForgotPassword"
import Cart from "./pages/Cart"
import ResetPassword from "./pages/ResetPassword"
import Products from "./pages/Products"
import Detail from "./pages/Detail"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/forgot" element={<ForgotPassword />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/reset/:token" element={<ResetPassword />} />

          
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App