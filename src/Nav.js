import React from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import './Nav.css'

function Nav() {
    return (<div className="div-nav">
        <nav className="nav">
            <header className="header">
                <h1><Link to="/" >Noteful</Link></h1>
            </header>
            
        </nav>
        </div>
        
    )
}

export default Nav;