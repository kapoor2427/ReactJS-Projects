import React from 'react';
import './navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className = "navbar">
                <a href="#">LOGO</a>
                <div style={{marginRight: "20px"}}>
                    <a href="#">Browse Games</a>
                    <a href="#">Game Jams</a>
                    <a href="#">Upload Games</a>
                    <a href="#">Devlogs</a>
                    <a href="#">Community</a>
                </div>
                
                
                <button>Login</button>
                <button>Register</button>
                <input type="text" placeholder="search" />
            </div>

        );
    }
}

export default Navbar;