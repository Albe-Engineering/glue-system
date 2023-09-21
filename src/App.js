import "./Presentation/Assets/Styles/App.css";
import Header from "./Presentation/Layout/Header/Index";
import Footer from "./Presentation/Layout/Footer/Index";
import { useState } from 'react';
import Dashboard from "./Presentation/Pages/Dashboard/Index";

export default function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}