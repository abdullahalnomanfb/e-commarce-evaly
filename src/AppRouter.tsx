import ProductDetails from "components/home/ProductDetails";
import Login from "pages/Login/Login";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Help = React.lazy(() => import("./pages/Help/Help"));
const Dashboard = React.lazy(() => import("components/home/ProductDetails"));
const AddPorduct = React.lazy(() => import("components/home/AddPorduct"));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Suspense fallback={<div className="mt-5">Loading...</div>}>
      <Router>
        {children}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addProduct" element={<AddPorduct />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
