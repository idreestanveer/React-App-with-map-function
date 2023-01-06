import React from "react";
import Menu from "./Menu";

function Drop() {
  return (
    <>
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <Menu/>
        </li>
    </>
  );
}

export default Drop;