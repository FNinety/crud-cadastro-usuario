import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
                <a href="#/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa fa-home"></i> 
                    Início
                </a>
                <a href="#/users">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa fa-users"></i>
                    Usuários
                </a> 
            </nav>
    </aside>