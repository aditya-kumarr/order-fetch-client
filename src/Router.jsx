import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import FindName from "./pages/FindName";
import FindOrder from "./pages/FindOrder";

const Router = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<FindName />}></Route>
      <Route path="/orders" element={<FindOrder />}></Route>
    </Routes>
  );
};

export default Router;
