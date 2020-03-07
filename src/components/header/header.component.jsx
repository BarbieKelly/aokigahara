import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <div className = 'logo-container'>
            <Link className='logo fab fa-2x fa-pagelines' to='/'></Link>
        </div>
        <div className = 'options'>
            <Link className = 'option' to='/shop'>SHOP</Link>
            <Link className = 'option' to='/shop'>CONTACT</Link>
        </div>
    </div>
)

export default Header;