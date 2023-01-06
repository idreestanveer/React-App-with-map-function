import React from "react";
import Img1 from "./Img1";
import Img2 from "./Img2";
import Img3 from "./Img3";
import Heading from "./Heading";
import Previous from "./Previous";
import Next from "./Next";

function Carosil(){

    return(
        <>
         <div id="carouselExampleFade" class="carousel slide carousel-fade vh-100" data-bs-ride="carousel">
      <div class="carousel-inner">
        <Img1/>
        <Img2/>
        <Img3/>
        <div class="masthead container w-100 position-absolute top-50">
        <Heading/>
        </div>
      </div>
      <Previous/>
      <Next/>
      
    </div>
        </>
    );
}

export default Carosil;