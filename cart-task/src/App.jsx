import React, { useState } from "react";
import CardValue from "./component/Card";
import Header from "./component/Header";
import Navbar from "./component/NavBar";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <div style={{backgroundColor:"#f2f2f2"}}>
      <Navbar cartValue={cartValue} />
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <CardValue setCartValue={setCartValue}></CardValue>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;