/* eslint-disable no-unused-vars */
import React from 'react';
import '../css/body.css';
import '../css/routerTurn.css';
import MonoSmall from '../img/logo/monoLogoSmall.png';
import {Link} from 'react-router-dom';

function Label(data) {
    return (
        <div className='__turn__card__Link'>
            <Link to='/Gaming' style={{textDecoration: 'none'}}>
                <label>Your turn will be displayed here!</label>
            </Link>
        </div>
    );
}

const Turn = () => {
    return (
        <div className='__turn'>
            <img src={MonoSmall} alt='MonoLogo'/>
            <button className='__turn__card'>
                {Label(0)}
            </button>
        </div>
    );
}

export default Turn;