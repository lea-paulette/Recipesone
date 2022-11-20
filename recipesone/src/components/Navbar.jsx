import React from "react";
import {Link} from 'react-router-dom';

        function Navbar(){
            return (
              <div className="block-nav">
                <nav className="block-contener">
                    <ul className="block-li">
                      <li><Link to="/"><img className="logo"></img></Link></li> 
                      <li><Link to="../Pages/LoginPage" className="">User</Link></li>
                    </ul>
                </nav>
              </div>
    );
}

export default Navbar