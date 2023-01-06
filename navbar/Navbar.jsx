import React from "react";
import Brand from "./Brand";
import Togle from "./Togle";

function Navbar() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <Brand/>
    <Togle/>
  </div>
</nav> 
      </>
    );
  }
  
  export default Navbar;