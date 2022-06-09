import React from 'react';
import './App.scss';
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
