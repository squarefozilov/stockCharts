import React from 'react';
 
class Navbar extends React.Component{
     
    render(){
        
        return(
            <div> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="navbar-brand" href="/">Stock Base</a>
            </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="nav-link" href="/company">Prices</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/list">Price charts</a>
            </li>
            <li className="nav-item">
            <a className="nav-link signin" href="/singup">Sign in</a>
            </li>
            <li className="nav-item">
            <a className="nav-link logout" href="/logout"></a>
            </li>
            </ul>
            </nav>
           
            </div>
      
        )
    }

}

export default Navbar; 