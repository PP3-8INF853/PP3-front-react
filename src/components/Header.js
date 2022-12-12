import React from 'react'
import {useNavigate} from 'react-router-dom';
import BoutonLogin from './BoutonLogin';

function Header() {
    const navigate = useNavigate();
    return (
        <div className='container'>
        <nav className="Header" role="navigation">
            <div className="containerLogo">
            <button id="logo-container" className="logo-PrixBanque" type='button' onClick={()=>navigate('/')}>PrixBanque</button>
                <BoutonLogin />
            </div>
        
        </nav>
        </div>
    )
}

export default Header