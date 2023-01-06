import React from "react";


function Card(props) {
  return (
    <>
      <div className="container d-inline-block col-4 width-50px height-50px">
        <div className="width-80% height-20%" style={{width:"200px", height:"200px"}}>
        <img src={props.first.img} alt="" className="img-fluid"/>
        </div><br />
        <h1>{props.second.head}</h1>
        <h3>{props.third.head2}</h3>
      </div>
    </>
  );
}

export default Card;