import React from "react";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Modal from './Modal'

function App() {
  return (
    <div className="App">
      <Modal/>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
