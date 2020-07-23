import './Logo.css';
import logo from '../../assets/img/dados.png'
import React from 'react'

export default props =>
    <aside className="logo">
        <a href="/" className="logo"></a>
            <img src={logo} alt='logo' />
    </aside>