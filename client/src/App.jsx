import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin/Admin-Layout";
import Dashboard from "./pages/admin/Dashboard";
import Features from "./pages/admin/Features";
import Orders from "./pages/admin/Orders";
import Products from "./pages/admin/Products";
import ShopLayout from "./components/shop/Shop-Layout";
import NoFound from "./components/shop/NoFound";
import Home from "./pages/shop/Home";
import Account from "./pages/shop/Account";
import Checkout from "./pages/shop/Checkout";
import Listings from "./pages/shop/Listings";
import CheckAuth from "./components/common/check-auth";
import UnAuth from "./pages/unAuth/UnAuth";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice";

const App = () => {
 const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout></AuthLayout>
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login></Login>} />
          <Route path="register" element={<Register></Register>} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout></AdminLayout>
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard></Dashboard>} />
          <Route path="features" element={<Features></Features>} />
          <Route path="orders" element={<Orders></Orders>} />
          <Route path="products" element={<Products></Products>} />
        </Route>

        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout></ShopLayout>
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home></Home>} />
          <Route path="account" element={<Account></Account>} />
          <Route path="checkout" element={<Checkout></Checkout>} />
          <Route path="listing" element={<Listings></Listings>} />
        </Route>
        <Route path="/unauth-page" element={<UnAuth></UnAuth>}></Route>
        <Route path="*" element={<NoFound></NoFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;
