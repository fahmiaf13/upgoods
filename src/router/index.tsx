import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedGuards, PublicGuards } from "../guards";

const Home = lazy(() => import("../components/pages/Home"));
const Login = lazy(() => import("../components/pages/Login"));
const Register = lazy(() => import("../components/pages/Register"));
const Dashboard = lazy(() => import("../components/pages/Dashboard"));
const Settings = lazy(() => import("../components/pages/Settings"));
const ProductDetails = lazy(() => import("../components/pages/product/ProductDetails"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route element={<PublicGuards />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedGuards />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
