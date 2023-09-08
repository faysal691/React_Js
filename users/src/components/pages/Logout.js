import React from "react";

const Logout = () => {

  return (
    <div className="container">
      <div className="py-4">
        <h1 align="center">LOGIN</h1>
      </div>
	  <form>
		<table>
		<label>
		
	  <div class="mb-3">
  <div for="exampleFormControlInput1" class="form-label">Email address</div>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
	  <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"></input>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div> 
<div>

<div class="col-auto" align="right">
	
    <button type="submit" class="btn btn-primary mb-3" >Confirm identity</button>
  </div>
  <div align="center">
<button type="submit" class="btn btn-primary mb-3">sign up</button>
</div>
  </div>
 
</label>
</table>
  </form>
	  </div>
	 
  );
};

export default Logout;