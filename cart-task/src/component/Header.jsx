import React from "react";

function Header() {
  return (
    <header className="bg-danger mb-5 py-5">
      <div className="container ">
        <div className="text-center text-black">
          <img src="https://logodix.com/logo/1615858.jpg" alt="" className="text-center" style={{ width: "1300px" , border : "25px" }}   />
        </div><br /><br />
        <h3 className="text-center text-black" >Buy Fruits and Vegetables at lowest Price $ 
                                                      </h3>
                                                      <br />
                                                      <h4 className="text-center text-black"  >Only at Fresh Mart</h4>
      </div>
    </header> 
  );
}

export default Header;