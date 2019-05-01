import React from "react";

//the Navbar is rendered at App.js and is persistant in all other pages. 
//ALL app controls should be accessed from here throughout the app for convience. 
//(not that this statment is set in stone, we don't even have the seach set up through here yet)

function Nav() {
  return (
 
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" >
      <a className="navbar-brand" href="/">GreenHouse Garden Helper</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#!">Username <span className="sr-only">(current)</span></a>
          </li>
         
        </ul>
        
      </div>
    </nav>
  );
}

export default Nav;
