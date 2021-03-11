import React, { useEffect } from 'react';
import logo from '../img/IoTLogo.jpg';
import '../css/body.css';
import '../css/routerLogin.css';
import IU from '../img/logo/IULogo.png';
import IoT from '../img/logo/IoTLogoWhite.png';
import Mono from '../img/logo/MonoLogo.png';

import {Link} from 'react-router-dom';

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
            <div className='footer'></div>
        </div>
    );
}

const Root = () => {
    useEffect(()=>{
        setTimeout(
            () => {
                document.getElementById('Waiting').style.display = 'none';
                document.getElementById('Login').style.display = 'block';
            }
        ,3000);
    });
    return (
        <div>
            <div id='Waiting' style={{display: 'block'}}><Waiting /></div>
            <div id='Login' style={{display: 'none'}}><Login /></div>
        </div>
    );
}

export default Root;