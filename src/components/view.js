import React from 'react';
 
class Navbar extends React.Component{
     
    render(){
        return(
            <div> 
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="navbar-brand" href="/">Stock Base</a>
            </li>
            </ul>
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link" href="/company">Most Active Company</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/list">Watch List</a>
            </li>
            <li class="nav-item">
            <a class="nav-link signin" href="/singup">Sign in</a>
            </li>
            <li class="nav-item">
            <a class="nav-link logout" href="/logout"></a>
            </li>
            </ul>
            </nav>
           
            </div>
      
        )
    }

}

export default Navbar; 