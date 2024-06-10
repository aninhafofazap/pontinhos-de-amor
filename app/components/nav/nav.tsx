"use client"

import { useState } from 'react';

import { Menu } from '../icons/menu';
import { Close } from '../icons/close';

import './nav.css'

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo-title'>
                    <img className='navbar-logo' src='/images/logo.svg' alt='Logo' />
                    <h1 className='navbar-title'>Pontinhos de Amor</h1>
                </div>
                <div className='navbar-menu-icon'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='navbar-button'>
                        {!menuOpen && (
                            <Menu className="icon" />
                        )}
                    </button>
                </div>
            </div>
            <div className={`navbar-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
            <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <a href='#'>Produtos</a>
                <a href='#'>Sobre nós</a>
                <a href='#'>Suporte</a>
            </div>
            {menuOpen && (
                <button onClick={() => setMenuOpen(false)} className='navbar-button-close'>
                    <Close className='icon' />
                </button>
            )}
        </nav>
    );
}

export default Nav;
