import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return ( 

<nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">IBOS</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active" to="/task">Tasks</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active" to="/team">Teams</Link>
        </li>
		<li class="nav-item">
          <Link class="nav-link active" to="/logout">Logout</Link>
        </li>
		<li class="nav-item ">
          <Link class="nav-link active" to="/about">About page</Link>
        </li>
        <li class="nav-item dropdown ">
          <Link class="nav-link dropdown-toggle active" to="aliya" role="button" data-bs-toggle="dropdown" >
            
          </Link>

		  
          <ul class="dropdown-menu" path="aliya">
            <li><Link class="dropdown-item active" to="/profile">Profile</Link></li>
          
			<li><Link class="dropdown-item  active" to="/addtext">Addtext</Link></li>
            
			</ul>
        </li>
		
      </ul>
    </div>
  </div>
</nav>


	);
};
export default Navbar;