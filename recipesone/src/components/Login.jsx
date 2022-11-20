import React from 'react'

function Login(){
    
   return(
   <div>
         <h3>Login page</h3>
         <input type="text" placeholder="email" classname="form-control"/>
         <br/>
         <input type="text" placeholder="login" classname="form-control"/>
         <br/>
         <button className="btn">Login</button>
         <br/>
         <button className="btn">Inscription</button>
    </div>
   )
}

export default Login