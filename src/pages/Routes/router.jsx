import React from "react";
import Login from "../Login/Login";
import Mycart from "../../component/myCart";
import BookDetails from "../../component/BookDetail";
import Dashboard from "../dashboard/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderSuccess from "../../component/ordersucess";
import Order from "../../component/orderSummery";
import Wishlist from "../../component/wishlist";
import AuthRoute from "./authroutes";
import ProtectedRoute from "./protectedroute";
function RouteOne() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
         / >
          <Route path="/BookDetail" element={<BookDetails />} />
          <Route path="/cart" element={<Mycart />} />
          <Route path="/orderSummery" element={<Order />} />
          <Route path="/orderSucessful" element={<OrderSuccess />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
        </Routes>

      </Router>
    </div>
  );
}

export default RouteOne;
