import React from "react";
import Sch_btn from "./Sch_btn";


function Search() {
  return (
    <>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Sch_btn/>
      </form> 
    </>
  );
}

export default Search;