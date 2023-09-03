import React from "react";
import { useNavigate } from 'react-router-dom';

function Appheader(){
    const navigate = useNavigate();
    return(
        <nav> 
        <h2>MIXMATCH</h2>
        <div>
            <ul className="navbar">
                <li>
                    <a href="home" className="active" onClick={()=> navigate ('/home')}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="intro" onClick={()=> navigate ('/intro')}>
                        Intro
                    </a>
                </li>
                <li>
                    <a href="select" onClick={()=> navigate ('/select')}>
                        Select
                    </a>
                </li>
                <li>
                    <a href="contact" onClick={()=> navigate ('/contact')}>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
        </nav>         
    );
};

export default Appheader;