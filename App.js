import React from "react";
import Footer from "./footer/Footer";
import Carosil from "./hero/Carosil";
import Navbar from "./navbar/Navbar";
import Card from "./Product/Card";

function App() {
  var card = [
    {img:'https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v20-1.jpg', head:'VIVO MOBILE', head2:'There is beautifull and friendly Mobiles'},
    {img:'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=2000',head:'HEADPHONES', head2:'This is comfortable Headphones'},
    {img:'https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY=',head:'MAN CLOTHES',head2:'There are many types of Clothes'}
  ]
  return (
    <>
      <div>
      <Navbar/> 
      <Carosil/>
      <div>{card.map((item)=>{
        return(
          <Card first={item} second={item} third={item}></Card>
        )
      })}</div>
      <Footer/>    
      </div>   
      
      
    </>
  );
}

export default App;
