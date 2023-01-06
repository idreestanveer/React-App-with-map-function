import React from "react";
import Btn from "./Btn";
import Contact from "./Contact";
import Email from "./Email";
import Form from "./Form";
import Name from "./Name";
import Text from "./Text";

function Footer(){

    return(
        <>
        <section id="contact" class="contact section-padding">
  <div class="container">
    <Contact/>
    
    <div class="row m-0">
      <div class="col-md-12 p-0 pt-4 pb-4">
        <div class="row">
          <Name/>
          <Email/>
          <Text/>
          <Btn/>
        </div>
      </div>

      <Form/>
    </div>
  </div>
 </section>
        </>
    );
}

export default Footer;