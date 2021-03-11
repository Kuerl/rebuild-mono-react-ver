import React, { useEffect } from 'react';
import logo from '../img/IoTLogo.jpg';
import '../css/body.css';
import '../css/routerLogin.css';
import IU from '../img/logo/IULogo.png';
import IoT from '../img/logo/IoTLogoWhite.png';
import Mono from '../img/logo/MonoLogo.png';

import {Link} from 'react-router-dom';
import Choice from './routerChoice.js';

const Waiting = () => {
    return (
        <div>
            <img src={logo} alt='IoT Logo'/>
        </div>
    );
}

const Logo = () => {
    return (
        <div className='__login__logo_container'>
            <img src={IU} className='__login__logo' alt='IU'/>
            <img src={IoT} className='__login__logo' alt='IoT'/>
        </div>
    );
}

const Input = () => {
    return (
        <div className='__login__input'>
            <img src={Mono} alt='MonoLogo'/>
            <input placeholder='Input Your PIN?'/>
            <button><Link to='/Choice' style={{textDecoration: 'none'}}>ENTER ROOM</Link></button>
        </div>
    );
}

const Login = () => {
    return (
        <div className="__login__back">
            <Logo />
            <Input />
            <div className='footer'>
            </div>
        </div>
    );
}

const Root = () => {
    useEffect (() => {
        // setTimeout(function() {
        //     return Login;
        // }, 3000);
    });
    return (
        <div>
            {/* <Waiting /> */}
            <Login />
        </div>
    );
}

export default Root;